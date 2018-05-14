import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LessonService {
  private _lessons: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor() { }

  get lessons() {
    return this._lessons.asObservable();
  }

  getLessons() {
    const lessondata = [
      {
        'name': 'lesson 1',
        'videourl': '',
        'lpath' : 'lesson-1',
        'cpath': 'what-is-html',
      },
      {
        'name': 'lesson 2',
        'videourl': '',
        'lpath' : 'lesson-2',
        'cpath': 'what-is-html',
      },
      {
        'name': 'lesson 3',
        'videourl': '',
        'lpath' : 'lesson-3',
        'cpath': 'what-is-html',
      },
      {
        'name': 'lesson 4',
        'videourl': '',
        'lpath' : 'lesson-4',
        'cpath': 'what-is-html',
      },
      {
        'name': 'lesson 1',
        'videourl': '',
        'lpath' : 'lesson-1',
        'cpath': 'what-is-css',
      },
      {
        'name': 'lesson 2',
        'videourl': '',
        'lpath' : 'lesson-2',
        'cpath': 'what-is-css',
      },
      {
        'name': 'lesson 3',
        'videourl': '',
        'lpath' : 'lesson-3',
        'cpath': 'what-is-css',
      },
    ];
    this._lessons.next(lessondata);
  }
}
