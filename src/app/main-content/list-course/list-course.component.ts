import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../providers/course.service';

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

  constructor(private _courseService: CourseService, ) { }

  ngOnInit() {
    // Get course //
    this._courseService.courses.subscribe(newcourse => {
      this.courses = newcourse;
    });
    this._courseService.getCourses();
    console.log(this.courses);

    // Get pageid //
    this.getPageid();

    // Filter course by cate //
    this.filterCourse();

    // Get Banner Path //
    this.getBannerPath();
  }

  // Get pageid //
  getPageid() {
    this.pageid = location.pathname.toString().slice(1);
    console.log(this.pageid);

    // tittle course //
    this.title = this.pageid;
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
