import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'letters-teacher-settings',
  templateUrl: './teacher-settings.component.html',
  styleUrls: ['./teacher-settings.component.scss']
})

export class TeacherSettingsComponent implements OnInit {
  displayedColumns = ['position', 'name', 'active'];
  dataSource = new MatTableDataSource<Student>(STUDENT_DATA);

  ngOnInit() {
  }
}

export interface Student {
  position: number;
  name: string;
  active: string;
}

const STUDENT_DATA: Student[] = [
  {position: 1, name: 'Cristian', active: 'true'},
  {position: 2, name: 'Chris', active: 'true'},
  {position: 3, name: 'Heather', active: 'true'},
  {position: 4, name: 'John', active: 'true'},
  {position: 5, name: 'Bob', active: 'true'},
  {position: 6, name: 'Ben', active: 'true'},
];

export const route = {
  component: TeacherSettingsComponent,
  data: {},
  resolve: {}
};
