import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {route as Login} from './pages/student/student.component';
import {route as Loading} from './pages/student-loading/student-loading.component';
import {route as Test} from './pages/student-test/student-test.component';
import {route as Complete} from './pages/student-test-complete/student-test-complete.component';

const routes: Routes = [
  {
    path: '',
    component: Login.component,
    data: Login.data,
    resolve: Login.resolve,
  }, {
    path: ':teacherId',
    children: [
      {
        // ultimately you'd probably want another component to block student interaction
        // until it loads WHICH student is being tested as well as well as which test is being run
        // you could even reuse the same Loading.component with different data/resolve items
        path: ':studentId',
        children: [
          {
            path: '',
            component: Loading.component,
            data: Loading.data,
            resolve: Loading.resolve
          }, {
            path: ':testId',
            component: Test.component,
            data: Test.data,
            resolve: Test.resolve,
          }, {
            path: ':testId/complete',
            component: Complete.component,
            data: Complete.data,
            resolve: Complete.resolve
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
