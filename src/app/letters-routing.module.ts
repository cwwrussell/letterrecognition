import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherModule} from './modules/teacher/teacher.module';
import {route as LandingPage} from './modules/landing/pages/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPage.component
  },
  {
    path: 'teacher',
    loadChildren: 'src/app/modules/teacher/teacher.module#TeacherModule'
  },
  {
    path: 'student',
    loadChildren: 'src/app/modules/student/student.module#StudentModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
