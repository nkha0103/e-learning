import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CourseComponent, BannerComponent, ],
  exports: [
    CourseComponent,
    BannerComponent,
  ]
})
export class SharedModule { }
