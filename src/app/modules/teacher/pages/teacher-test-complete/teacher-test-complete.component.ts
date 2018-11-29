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

  studentId = 'Select Student';

  studentList = [
    {value: 'Chris', viewValue: '11111111'},
    {value: 'Heather', viewValue: '222222222'},
    {value: 'John', viewValue: '33333333333'},
    {value: 'Cristian', viewValue: '4444444444'},
  ];

  ngOnInit() {
  }

  chooseStudentAndRedoTest() {
    // should have a student dropdown to choose a different student,
    // then the route would be ['..', '..', 'studentId']
    this.router.navigate(['../../', this.studentId], {relativeTo: this.activatedRoute});
  }
}

export const route = {
  component: TeacherTestCompleteComponent,
  data: {},
  resolve: {}
};
