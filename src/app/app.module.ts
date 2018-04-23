import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LayoutModule } from './layout/layout.module';
import { ListCourseComponent } from './main-content/list-course/list-course.component';
import { CourseDetailComponent } from './main-content/course-detail/course-detail.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { SharedModule } from './shared/shared.module';


// Services here //
import { CourseService } from './providers/course.service';



@NgModule({
  declarations: [
    AppComponent,
    ListCourseComponent,
    CourseDetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    SharedModule,
  ],
  providers: [ CourseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
