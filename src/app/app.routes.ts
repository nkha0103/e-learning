import { Routes } from '@angular/router';
import { ListCourseComponent } from './main-content/list-course/list-course.component';
import { CourseDetailComponent } from './main-content/course-detail/course-detail.component';
import { ContactComponent } from './main-content/contact/contact.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: './main-content/main-content.module#MainContentModule',
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: ':courseName', component: ListCourseComponent
    },
    {
        path: ':courseName/:courseDetail', component: CourseDetailComponent
    },
    {
        path: ':courseName/:courseDetail/:courseLesson', component: CourseDetailComponent,
        runGuardsAndResolvers: 'always',
    },
];
