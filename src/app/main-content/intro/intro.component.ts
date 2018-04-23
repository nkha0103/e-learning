import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CourseService } from '../../providers/course.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  bannerpath = '../../../assets/images/bg-banner/home.jpg';
  title = 'Welcome to E-Learning';
  stitle = 'Take the world\'s best courses, online.';
  pageid = 'home';

  courses: any[];
  frontends: any[];
  backends: any[];

  // courses: any[] = [
  //   {
  //     'bannerurl': '../../../assets/images/course-banner/html.jpg',
  //     'name': 'HTML: Hypertext Markup Language',
  //     'title': 'What is HTML ?',
  //     'rating': '4',
  //     'duration': '20 min',
  //     'cate': 'front-end',
  //   },
  //   {
  //     'bannerurl': '../../../assets/images/course-banner/css.jpg',
  //     'name': 'CSS: Cascading Style Sheets',
  //     'title': 'What is CSS ?',
  //     'rating': '5',
  //     'duration': '40 min',
  //     'cate': 'front-end',
  //   },
  //   {
  //     'bannerurl': '../../../assets/images/course-banner/html.jpg',
  //     'name': 'HTML: Hypertext Markup Language',
  //     'title': 'What is HTML ?',
  //     'rating': '4',
  //     'duration': '20 min',
  //     'cate': 'front-end',
  //   },
  //   {
  //     'bannerurl': '../../../assets/images/course-banner/css.jpg',
  //     'name': 'CSS: Cascading Style Sheets',
  //     'title': 'What is CSS ?',
  //     'rating': '5',
  //     'duration': '40 min',
  //     'cate': 'front-end',
  //   },
  // ];
  constructor(private _courseService: CourseService, private _filteredcourses: CourseService) { }

  ngOnInit() {

    // Get course //
    this._courseService.courses.subscribe(newcourse => {
      this.courses = newcourse;
    });
    this._courseService.getCourses();
    console.log(this.courses);

    // Get front end courses //
    this.frontends = this.filterCourse('front-end');
    console.log('front-end courses after filter');
    console.log(this.frontends);

    // Get back end courses //
    this.backends = this.filterCourse('back-end');
    console.log('back-end courses after filter');
    console.log(this.backends);

  }

  // Filter course by cate//
  filterCourse(cateid) {
    const catecourses = this.courses.filter((course) => {
      return course.cate === cateid;
    });
    return catecourses;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    if ($('.owl-carousel').length) {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
  }
}

