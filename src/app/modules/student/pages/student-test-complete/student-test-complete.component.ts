import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-student-test-complete',
  templateUrl: './student-test-complete.component.html',
  styleUrls: ['./student-test-complete.component.scss']
})
export class StudentTestCompleteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  startTestAgain() {
    this.router.navigate(['student', 'someteacherId', 'someotherstudentid']);
  }
}

export const route = {
  component: StudentTestCompleteComponent,
  data: {},
  resolve: {}
};
