import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-teacher-test-complete',
  templateUrl: './teacher-test-complete.component.html',
  styleUrls: ['./teacher-test-complete.component.scss']
})
export class TeacherTestCompleteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  studentId = null;

  studentList = [
    {value: 'Chris', viewValue: '11111111'},
    {value: 'Heather', viewValue: '222222222'},
    {value: 'John', viewValue: '33333333333'},
    {value: 'Cristian', viewValue: '4444444444'},
  ];

  breakpoint;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 870) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 870) ? 1 : 2;
  }

  chooseStudentAndRedoTest() {
    // should have a student dropdown to choose a different student,
    // then the route would be ['..', '..', 'studentId']
    this.router.navigate(['../../', this.studentId], {relativeTo: this.activatedRoute});
  }

  goHome() {
    const teacherId = '123948';
    this.router.navigate(['teacher', teacherId, 'home']);
  }

  goToStudentData() {
    this.router.navigate(['../../../', 'data', '1212121212'], {relativeTo: this.activatedRoute});
  }
}

export const route = {
  component: TeacherTestCompleteComponent,
  data: {},
  resolve: {}
};
