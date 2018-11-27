import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeacherRoutingModule} from './teacher-routing.module';
import {TeacherComponent} from './pages/teacher/teacher.component';
import { TeacherHomeComponent } from './pages/teacher-home/teacher-home.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  declarations: [TeacherComponent, TeacherHomeComponent]
})
export class TeacherModule {
}
