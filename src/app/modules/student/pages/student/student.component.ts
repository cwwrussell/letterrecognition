import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'letters-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

export const route = {
  component: StudentComponent,
  data: {},
  resolve: {}
};
