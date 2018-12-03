import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../../student/student.service';

@Component({
  selector: 'letters-teacher-class-data',
  templateUrl: './teacher-class-data.component.html',
  styleUrls: ['./teacher-class-data.component.scss']
})
export class TeacherClassDataComponent implements OnInit {

  ALPHABET: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  dataSource = new MatTableDataSource<StudentGrade>(GRADE_DATA);
  displayedColumns: string[] = ['name', ...this.ALPHABET];
  studentId = 'Select Student';
  studentList = [
    {value: 'Chris', viewValue: '11111111'},
    {value: 'Heather', viewValue: '222222222'},
    {value: 'John', viewValue: '33333333333'},
    {value: 'Cristian', viewValue: '4444444444'},
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private ss: StudentService) {
  }

  goToStudentData(student: string) {
    if (student) {
      this.studentId = student;
    }
    this.router.navigate([this.studentId === 'Select Student' ? '939393' : this.studentId], {relativeTo: this.activatedRoute});
  }

  ngOnInit() {
  }

  navigateToStudentData() {
    this.router.navigate(['939393'], {relativeTo: this.activatedRoute});
  }

}

export interface StudentGrade {
  name: string,
  id: string,
  letters: string[],
}

const GRADE_DATA: StudentGrade[] = [
  {
    name: 'Chris',
    id: '11111111',
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  },
  {
    name: 'Heather',
    id: '22222222',
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  },
  {
    name: 'John',
    id: '33333333',
    letters: ['B', 'C', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z']
  },
  {
    name: 'Christian',
    id: '44444444',
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  },
];

export const route = {
  component: TeacherClassDataComponent,
  data: {},
  resolve: {}
};
