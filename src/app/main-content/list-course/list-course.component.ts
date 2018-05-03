import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../providers/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses: any[];
  catecourses: any[];
  title = '';
  pageid = '';
  bannerpath = '';

  constructor(private _courseService: CourseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Get course //
    this._courseService.courses.subscribe(newcourse => {
      this.courses = newcourse;
    });
    this._courseService.getCourses();
    console.log(this.courses);

    // Get pageid //
    this.activatedRoute.params.subscribe(params => {
      this.pageid = params['courseName'];

      // tittle course //
      this.title = this.pageid;

      // Filter course by cate //
      this.filterCourse();

      // Get Banner Path //
      this.getBannerPath();
    });
  }

  // Filter course by cate//
  filterCourse() {
    const cateid = this.pageid;
    this.catecourses = this.courses.filter((course) => {
      return course.cate === cateid;
    });
    console.log('courses after filter');
    console.log(this.catecourses);
  }

  // Get Banner Path //
  getBannerPath() {
    this.bannerpath = '../../../assets/images/bg-banner/' + this.pageid + '.jpg';
  }
}
