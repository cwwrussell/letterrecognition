import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'letters-teacher-settings',
  templateUrl: './teacher-settings.component.html',
  styleUrls: ['./teacher-settings.component.scss']
})
export class TeacherSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const route = {
  component: TeacherSettingsComponent,
  data: {},
  resolve: {}
};
