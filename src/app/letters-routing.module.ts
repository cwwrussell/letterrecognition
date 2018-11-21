import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {route as LandingPage} from './shared/landing/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPage.component,
    data: LandingPage.data,
    resolve: LandingPage.resolve,
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
export class LettersRoutingModule {
}
