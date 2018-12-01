import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.scss']
})
export class TeacherLoginComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.navigate();
  }

  navigate() {
    this.router.navigate(['..', '123948'], {relativeTo: this.activatedRoute});
  }

}

export const route = {
  component: TeacherLoginComponent,
  data: {},
  resolve: {}
};
