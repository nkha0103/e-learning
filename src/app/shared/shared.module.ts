import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [CourseComponent, BannerComponent, ],
  exports: [
    CourseComponent,
    BannerComponent,
  ]
})
export class SharedModule { }
