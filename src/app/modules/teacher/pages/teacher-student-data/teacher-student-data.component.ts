import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'letters-teacher-student-data',
  templateUrl: './teacher-student-data.component.html',
  styleUrls: ['./teacher-student-data.component.scss']
})
export class TeacherStudentDataComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

export const route = {
  component: TeacherStudentDataComponent,
  data: {},
  resolve: {}
};
