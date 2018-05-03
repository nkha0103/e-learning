import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  pageid = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // Get pageid //
    this.activatedRoute.params.subscribe(params => {
      this.pageid = params['courseDetail'];
      console.log(this.pageid);
    });

  }
}
