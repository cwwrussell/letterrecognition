import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-teacher-test-view',
  templateUrl: './teacher-test-view.component.html',
  styleUrls: ['./teacher-test-view.component.scss']
})
export class TeacherTestViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  completeTest() {
    this.router.navigate(['..', 'complete'], {relativeTo: this.activatedRoute});
  }

}

export const route = {
  component: TeacherTestViewComponent,
  data: {},
  resolve: {}
};
