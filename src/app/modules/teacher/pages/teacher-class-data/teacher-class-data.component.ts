import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-teacher-class-data',
  templateUrl: './teacher-class-data.component.html',
  styleUrls: ['./teacher-class-data.component.scss']
})
export class TeacherClassDataComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  navigateToStudentData() {
    this.router.navigate(['939393'], {relativeTo: this.activatedRoute});
  }

}

export const route = {
  component: TeacherClassDataComponent,
  data: {},
  resolve: {}
};
