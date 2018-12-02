import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeacherRoutingModule} from './teacher-routing.module';
import {TeacherComponent} from './pages/teacher/teacher.component';
import {TeacherHomeComponent} from './pages/teacher-home/teacher-home.component';
import {TeacherLoginComponent} from './pages/teacher-login/teacher-login.component';
import {TeacherTestStartComponent} from './pages/teacher-test-start/teacher-test-start.component';
import {TeacherTestViewComponent} from './pages/teacher-test-view/teacher-test-view.component';
import {TeacherTestCompleteComponent} from './pages/teacher-test-complete/teacher-test-complete.component';
import {TeacherClassDataComponent} from './pages/teacher-class-data/teacher-class-data.component';
import {TeacherStudentDataComponent} from './pages/teacher-student-data/teacher-student-data.component';
import {TeacherSettingsComponent} from './pages/teacher-settings/teacher-settings.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {NavbarModule} from '../../shared/components/navbar/navbar.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {TeacherAddStudentComponent} from './pages/teacher-add-student/teacher-add-student.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    NavbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
  ],
  declarations: [
    TeacherComponent,
    TeacherHomeComponent,
    TeacherLoginComponent,
    TeacherTestStartComponent,
    TeacherTestViewComponent,
    TeacherTestCompleteComponent,
    TeacherClassDataComponent,
    TeacherStudentDataComponent,
    TeacherSettingsComponent,
    TeacherAddStudentComponent,
  ],
  entryComponents: [TeacherAddStudentComponent],
})
export class TeacherModule {
}
