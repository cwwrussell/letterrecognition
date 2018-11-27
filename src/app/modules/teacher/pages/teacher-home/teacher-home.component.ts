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

  ngOnInit() {
  }

  goToTest() {
    this.router.navigate(['..', 'test', '93939399222'], {relativeTo: this.activatedRoute});
  }

}

export const route = {
  component: TeacherHomeComponent,
  data: {},
  resolve: {}
};
