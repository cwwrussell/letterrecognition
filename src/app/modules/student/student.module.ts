import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StudentComponent} from './pages/student/student.component';
import {StudentLoadingComponent} from './pages/student-loading/student-loading.component';
import {StudentTestComponent} from './pages/student-test/student-test.component';
import {StudentTestCompleteComponent} from './pages/student-test-complete/student-test-complete.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatButtonModule
  ],
  declarations: [
    StudentComponent,
    StudentLoadingComponent,
    StudentTestComponent,
    StudentTestCompleteComponent
  ]
})
export class StudentModule {
}
