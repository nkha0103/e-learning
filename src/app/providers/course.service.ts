import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CourseService {
  private _courses: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor() { }

  get courses() {
    return this._courses.asObservable();
  }

  getCourses() {
    const coursedata = [
      {
        'bannerurl': '../../../assets/images/course-banner/html.jpg',
        'name': 'HTML: Hypertext Markup Language',
        'title': 'What is HTML ?',
        'rating': '4',
        'duration': '20 min',
        'cate': 'front-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/css.jpg',
        'name': 'CSS: Cascading Style Sheets',
        'title': 'What is CSS ?',
        'rating': '5',
        'duration': '40 min',
        'cate': 'front-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/angular.jpg',
        'name': 'Angular: By Google',
        'title': 'What is Angular ?',
        'rating': '5',
        'duration': '45 Hours',
        'cate': 'front-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/html.jpg',
        'name': 'HTML: Hypertext Markup Language',
        'title': 'What is HTML ?',
        'rating': '4',
        'duration': '20 min',
        'cate': 'front-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/css.jpg',
        'name': 'CSS: Cascading Style Sheets',
        'title': 'What is CSS ?',
        'rating': '5',
        'duration': '40 min',
        'cate': 'front-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/angular.jpg',
        'name': 'Angular: By Google',
        'title': 'What is Angular ?',
        'rating': '5',
        'duration': '45 Hours',
        'cate': 'front-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/html.jpg',
        'name': 'HTML: Hypertext Markup Language',
        'title': 'What is HTML ?',
        'rating': '4',
        'duration': '20 min',
        'cate': 'front-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/css.jpg',
        'name': 'CSS: Cascading Style Sheets',
        'title': 'What is CSS ?',
        'rating': '5',
        'duration': '40 min',
        'cate': 'front-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/angular.jpg',
        'name': 'Angular: By Google',
        'title': 'What is Angular ?',
        'rating': '5',
        'duration': '45 Hours',
        'cate': 'front-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/nodejs.jpg',
        'name': 'NodeJS: JS Back-end',
        'title': 'What is NodeJS ?',
        'rating': '5',
        'duration': '50 Hours',
        'cate': 'back-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/csharp.jpg',
        'name': 'C#: Powerfull languge',
        'title': 'What is C# ?',
        'rating': '5',
        'duration': '70 Hours',
        'cate': 'back-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/java.jpg',
        'name': 'Java: By Oracle',
        'title': 'What is Java ?',
        'rating': '5',
        'duration': '60 Hours',
        'cate': 'back-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/php.jpg',
        'name': 'PHP: Popular web backend language',
        'title': 'What is PHP ?',
        'rating': '5',
        'duration': '60 Hours',
        'cate': 'back-end',
      },
      {
        'bannerurl': '../../../assets/images/course-banner/asp.jpg',
        'name': 'Asp.net: By Microsoft',
        'title': 'What is asp.net ?',
        'rating': '5',
        'duration': '60 Hours',
        'cate': 'back-end',
      },
    ];
    this._courses.next(coursedata);
  }
}
