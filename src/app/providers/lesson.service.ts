import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LessonService {
  private _lessons: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  get lessons() {
    return this._lessons.asObservable();
  }

  getLessons() {
    return new Promise((resovle, reject) => {
      this.http.get('https://kha-e-learning.firebaseio.com/lessons/.json').toPromise()
        .then((res: any[]) => {
          // console.log('log cai nay truoc');
          this._lessons.next(res);
        }).then((abc) => {
          resovle();
        });
    });
  }
}
