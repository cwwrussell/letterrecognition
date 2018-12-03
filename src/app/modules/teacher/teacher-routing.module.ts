import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {route as Base} from './pages/teacher/teacher.component';
import {route as Home} from './pages/teacher-home/teacher-home.component';
import {route as TestStart} from './pages/teacher-test-start/teacher-test-start.component';
import {route as StudentData} from './pages/teacher-student-data/teacher-student-data.component';
import {route as TestComplete} from './pages/teacher-test-complete/teacher-test-complete.component';
import {route as ClassData} from './pages/teacher-class-data/teacher-class-data.component';
import {route as Settings} from './pages/teacher-settings/teacher-settings.component';
import {route as Login} from './pages/teacher-login/teacher-login.component';
import {route as TestView} from './pages/teacher-test-view/teacher-test-view.component';
import {UnfinishedTestGuard} from '../../shared/service/route-guard/unfinished-test-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: Login.component,
    data: Login.data,
    resolve: Login.resolve,
    pathMatch: 'full'
  }, {
    path: ':teacherId',
    component: Base.component,
    data: Base.data,
    resolve: Base.resolve,
    children: [
      {
        path: '',
        redirectTo: 'home'
      }, {
        path: 'home',
        component: Home.component,
        data: Home.data,
        resolve: Home.resolve
      }, {
        path: 'data',
        children: [
          {
            path: '',
            component: ClassData.component,
            data: ClassData.data,
            resolve: ClassData.resolve
          }, {
            path: ':studentId',
            component: StudentData.component,
            data: StudentData.data,
            resolve: StudentData.resolve
          }
        ]
      }, {
        path: 'test/:testId/:studentId',
        children: [
          {
            path: '',
            component: TestStart.component,
            data: TestStart.data,
            resolve: TestStart.resolve
          }, {
            path: 'test',
            component: TestView.component,
            canDeactivate: [UnfinishedTestGuard],
            data: TestView.data,
            resolve: TestView.resolve
          }, {
            path: 'complete',
            component: TestComplete.component,
            data: TestComplete.data,
            resolve: TestComplete.resolve
          }
        ]
      }, {
        path: 'settings',
        component: Settings.component,
        data: Settings.data,
        resolve: Settings.resolve
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {
}
