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

  constructor(private _courseService: CourseService, private _filteredcourses: CourseService) { }

  ngOnInit() {

    // Get course //
    this._courseService.courses.subscribe(newcourse => {
      this.courses = newcourse;
      // console.log(this.courses);
    });
    this._courseService.getCourses().then(() => {
      // console.log('cai nay log sau');
      // Get front end courses //
      this.frontends = this.filterCourse('front-end');
      // console.log('front-end courses after filter');
      // console.log(this.frontends);

      // Get back end courses //
      this.backends = this.filterCourse('back-end');
      // console.log('back-end courses after filter');
      // console.log(this.backends);
    });
  }

  // Filter course by cate//
  filterCourse(cateid) {
    const catecourses = this.courses.filter((course) => {
      return course.cate === cateid;
    });
    return catecourses;
  }


  // tslint:disable-next-line:member-ordering
  slideConfig = {
    'slidesToShow': 5,
    'slidesToScroll': 1,
    'autoplay': true,
    'infinite': true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
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
    }, 500);
  }
}

