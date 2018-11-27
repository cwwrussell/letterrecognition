import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  teacherLogin(event) {
    this.router.navigate(['someteacherid', 'somestudentid'], {relativeTo: this.activatedRoute});
  }

}

export const route = {
  component: StudentComponent,
  data: {},
  resolve: {}
};
