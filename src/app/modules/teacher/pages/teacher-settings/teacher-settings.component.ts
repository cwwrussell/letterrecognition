import {Component, OnInit} from '@angular/core';
import {MatDialogConfig, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {TeacherAddStudentComponent} from '../teacher-add-student/teacher-add-student.component';
import {Test} from '../../../../shared/service/test/test/test.service';

@Component({
  selector: 'letters-teacher-settings',
  templateUrl: './teacher-settings.component.html',
  styleUrls: ['./teacher-settings.component.scss']
})

export class TeacherSettingsComponent implements OnInit {

  studentColumns = ['position', 'name', 'active', 'actions'];
  studentData = new MatTableDataSource<Student>(STUDENT_DATA);
  testColumns = ['testNumber', 'name', 'active'];
  testData = new MatTableDataSource<Test>(TEST_DATA);
  themeColumns = ['theme', 'active'];
  themeData = new MatTableDataSource<Theme>(THEME_DATA);
  breakpoint;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 870) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 870) ? 1 : 2;
  }

  addUserModal(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(TeacherAddStudentComponent, dialogConfig);
  }
}

export interface Student {
  position: number;
  name: string;
  active: string;
}

export interface Theme {
  theme: string;
  active: string;
}

const STUDENT_DATA: Student[] = [
  {position: 1, name: 'Cristian', active: 'true'},
  {position: 2, name: 'Chris', active: 'true'},
  {position: 3, name: 'Heather', active: 'true'},
  {position: 4, name: 'John', active: 'true'},
  {position: 5, name: 'Bob', active: 'true'},
  {position: 6, name: 'Ben', active: 'true'},
];

const TEST_DATA: Test[] = [
  {testNumber: 1, name: 'Upper Case', active: 'true'},
  {testNumber: 2, name: 'Lower Case', active: 'true'},
  {testNumber: 3, name: 'Mixed Case', active: 'true'},
];

const THEME_DATA: Theme[] = [
  {theme: 'Fall', active: 'true'},
  {theme: 'Spring', active: 'false'},
  {theme: 'Summer', active: 'false'},
];

export const route = {
  component: TeacherSettingsComponent,
  data: {},
  resolve: {}
};
