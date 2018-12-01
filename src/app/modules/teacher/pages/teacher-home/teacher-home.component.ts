import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

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

  ngOnInit() {
  }

  goToTest() {
    this.router.navigate(['..', 'test', this.testId === 'Select Test' ? '93939399222' : this.testId], {relativeTo: this.activatedRoute});
  }
  goToStudentData() {
    this.router.navigate(['..', 'data', this.studentId === 'Select Student' ? '939393' : this.studentId], {relativeTo: this.activatedRoute});
  }
  goToClassData() {
    this.router.navigate(['..', 'data'], {relativeTo: this.activatedRoute});
  }
  goToSettings() {
    this.router.navigate(['..', 'settings'], {relativeTo: this.activatedRoute});
  }
  addStudent() {
    this.router.navigate(['..', 'settings'], {relativeTo: this.activatedRoute});
  }
}

export const route = {
  component: TeacherHomeComponent,
  data: {},
  resolve: {}
};
