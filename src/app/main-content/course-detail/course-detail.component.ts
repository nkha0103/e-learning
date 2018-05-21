import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../providers/course.service';
import { LessonService } from '../../providers/lesson.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  courses: any[]; // all courses //
  lessons: any[]; // all lessons //
  detailcourse = []; // data(detail) of current course //
  courselessons = []; // lessons of current course //
  crlesson = []; // data of current lesson //
  courseid = ''; // ID or Name of current course get from param //
  coursecate = ''; // Category of current course //
  lessonid = ''; // lesson path of current lesson //
  introvideo = true;
  cvideopath; // temp course video path //
  cvpath: SafeResourceUrl; // safe course video path //
  lvideopath; // temp course video path //
  lvpath: SafeResourceUrl; // safe course video path //
  rerender = false;

  constructor(
    private _courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private _lessonService: LessonService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    // Get course //
    this._courseService.courses.subscribe(newcourse => {
      this.courses = newcourse;
    });
    this._courseService.getCourses().then(() => {
      // console.log('log cai nay sau');

      // Get lessons //
      this._lessonService.lessons.subscribe(newlesson => {
        this.lessons = newlesson;
      });
      this._lessonService.getLessons().then(() => {

        // Get courseid - coursecate - lesson //
        this.activatedRoute.params.subscribe(params => {
          this.courseid = params['courseDetail'];
          this.coursecate = params['courseName'];
          this.lessonid = params['courseLesson'];
          // console.log(this.coursecate);
          // console.log(this.courseid);
          // console.log(this.lessonid);

          // Filter detail course by cpath = courseid //
          this.filterCourse();

          // Check detail course exist - if not then navigate to home or not found//
          this.isDetailCourseExist();

          // Get course intro video from server //
          this.getCVideo();

          // Filter lesson by cpath - cpath = courseid //
          this.filterLesson();

          // Get current lesson //
          this.currentLesson();

          // Check lesson course exist - if not then navigate to home or not found //
          this.isLessonExist();

          // Hide Intro Video when go to the lesson //
          this.check();

        });
      });
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {

  }

  // Filter detail course by cpath - cpath = courseid //
  filterCourse() {
    const id = this.courseid;
    this.detailcourse = this.courses.filter((course) => {
      return course.cpath === id;
    });
    // console.log('courses after filter');
    // console.log(this.detailcourse);
  }

  // Filter lesson by cpath - cpath = courseid //
  filterLesson() {
    const id = this.courseid;
    this.courselessons = this.lessons.filter((lesson) => {
      return lesson.cpath === id;
    });
    // console.log(this.courselessons);
  }

  // Get current lesson //
  currentLesson() {
    const id = this.lessonid;
    this.crlesson = this.courselessons.filter((lesson) => {
      return lesson.lpath === id;
    });
  }

  // Get detail/current course video //
  getCVideo() {
    const videoid = this.detailcourse[0].cvid;
    this.cvideopath = 'https://firebasestorage.googleapis.com/v0/b/kha-e-learning.appspot.com/o/' + videoid;
    this.cvpath = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvideopath);
    // console.log(this.cvpath);
  }

  // Get current lesson video //
  getLVideo() {
    const videoid = this.crlesson[0].lvid;
    this.lvideopath = 'https://firebasestorage.googleapis.com/v0/b/kha-e-learning.appspot.com/o/' + videoid;
    this.lvpath = this.sanitizer.bypassSecurityTrustResourceUrl(this.lvideopath);
    console.log(this.lvpath);
  }

  // Hide Intro Video and get lesson video when go to the lesson //
  check() {
    if (this.lessonid !== undefined) {
      this.introvideo = false;

      // get current lesson video //
      this.getLVideo();
    }
  }

  changeLesson() {
    this.rerender = true;
    this.cdRef.detectChanges();
    this.rerender = false;
  }

  // Check data exist - if not => redirect //

  isDetailCourseExist() {
    if (this.detailcourse.length === 0) {
      this.router.navigate(['home']);
    }
  }

  isLessonExist() {
    if (this.crlesson.length === 0 && this.lessonid === undefined) {
      // console.log('intro lesson');
    } if (this.crlesson.length === 0 && this.lessonid !== undefined) {
      // console.log('khong co lesson nay');
      this.router.navigate(['home']);
    }
  }
}

