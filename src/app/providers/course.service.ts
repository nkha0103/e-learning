import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseService {
  private _courses: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  get courses() {
    return this._courses.asObservable();
  }

  // getCourses() {
  //   this.http.get('https://kha-e-learning.firebaseio.com/courses/.json').subscribe((data: any[]) => {
  //     this._courses.next(data);
  //   });
  // }

  getCourses() {
    return new Promise((resovle, reject) => {
      this.http.get('https://kha-e-learning.firebaseio.com/courses/.json').toPromise()
        .then((res: any[]) => {
          // console.log('log cai nay truoc');
          this._courses.next(res);
        }).then((abc) => {
          resovle();
        });
    });
  }
}
