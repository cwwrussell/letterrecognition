import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TeacherAddStudentComponent} from '../teacher-add-student/teacher-add-student.component';

@Component({
  selector: 'letters-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent implements OnInit {
  homeForm: FormGroup;
  testForm: FormGroup;
  disableTestButton: boolean;
  studentId = 'Select Student';
  studentList = [
    {value: 'Chris', viewValue: '11111111'},
    {value: 'Heather', viewValue: '222222222'},
    {value: 'John', viewValue: '33333333333'},
    {value: 'Cristian', viewValue: '4444444444'},
  ];
  testId = 'Select Test';
  testList = [
    {value: 'Lowercase ABCs Fall', viewValue: '1111'},
    {value: 'Uppercase ABCs Fall', viewValue: '2222'},
    {value: 'Lowercase ABcs Spring', viewValue: '3333'},
    {value: 'Uppercase ABCs Spring', viewValue: '4444'},
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.disableTestButton = true;
    this.buildForm();
    this.testForm.valueChanges.subscribe(() => {
      const testId = this.testForm.get('testId').value;
      const studentId = this.testForm.get('studentId').value;
      this.disableTestButton = !testId || !studentId;
    });
  }

  buildForm() {
    this.testForm = this.fb.group({
      testId: new FormControl(),
      studentId: new FormControl()
    });
    this.homeForm = this.fb.group({
      test: this.testForm,
      studentData: new FormControl()
    });
  }

  goToTest() {
    const testId = this.testForm.get('testId').value;
    const studentId = this.testForm.get('studentId').value;
    this.router.navigate(
      ['..', 'test', testId, studentId],
      {relativeTo: this.activatedRoute}
    );
  }

  goToStudentData() {
    this.router.navigate(
      ['..', 'data', this.studentId === 'Select Student' ? '939393' : this.studentId],
      {relativeTo: this.activatedRoute}
    );
  }

  goToClassData() {
    this.router.navigate(['..', 'data'],
      {relativeTo: this.activatedRoute}
    );
  }

  goToSettings() {
    this.router.navigate(
      ['..', 'settings'],
      {relativeTo: this.activatedRoute}
    );
  }

  addStudent() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(TeacherAddStudentComponent, dialogConfig);
  }
}

export const route = {
  component: TeacherHomeComponent,
  data: {},
  resolve: {}
};
