import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-teacher-test-start',
  templateUrl: './teacher-test-start.component.html',
  styleUrls: ['./teacher-test-start.component.scss']
})
export class TeacherTestStartComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  startTest() {
    this.router.navigate(['test'], {relativeTo: this.activatedRoute});
  }
}

export const route = {
  component: TeacherTestStartComponent,
  data: {},
  resolve: {}
};
