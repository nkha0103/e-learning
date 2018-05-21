import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LayoutModule } from './layout/layout.module';
import { ListCourseComponent } from './main-content/list-course/list-course.component';
import { CourseDetailComponent } from './main-content/course-detail/course-detail.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { SharedModule } from './shared/shared.module';


// Services here //
import { CourseService } from './providers/course.service';
import { LessonService } from './providers/lesson.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListCourseComponent,
    CourseDetailComponent,
    ContactComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    LayoutModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

  ],
  providers: [CourseService, LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
