import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'letters-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

export const route = {
  component: TeacherComponent,
  data: {},
  resolve: {}
};
