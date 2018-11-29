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

  student = 'Select Student';

  ngOnInit() {
  }

  chooseStudentAndRedoTest() {
    // should have a student dropdown to choose a different student,
    // then the route would be ['..', '..', 'studentId']
    this.router.navigate(['..'], {relativeTo: this.activatedRoute});
  }

}

export const route = {
  component: TeacherTestCompleteComponent,
  data: {},
  resolve: {}
};
