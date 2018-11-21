import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {route as Home} from './pages/teacher/teacher.component';

const routes: Routes = [
  {
    path: '',
    component: Home.component,
    data: Home.data,
    resolve: Home.resolve,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {
}
