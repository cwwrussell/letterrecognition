import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StudentComponent} from './pages/student/student.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [StudentComponent]
})
export class StudentModule {
}
