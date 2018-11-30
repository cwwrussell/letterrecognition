import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'letters-teacher-settings',
  templateUrl: './teacher-settings.component.html',
  styleUrls: ['./teacher-settings.component.scss']
})

export class TeacherSettingsComponent implements OnInit {

  constructor() {
  }

  studentData = [
    {position: 1, name: 'Cristian', active: 'true'},
    {position: 2, name: 'Chris', active: 'true'},
    {position: 3, name: 'Heather', active: 'true'},
    {position: 4, name: 'John', active: 'true'},
    {position: 5, name: 'Bob', active: 'true'},
    {position: 6, name: 'Ben', active: 'true'},
  ];

  displayedColumns = [
    'position',
    'name',
    'active',
  ];

  ngOnInit() {
  }

}

export const route = {
  component: TeacherSettingsComponent,
  data: {},
  resolve: {}
};
