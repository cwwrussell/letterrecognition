import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'letters-teacher-student-data',
  templateUrl: './teacher-student-data.component.html',
  styleUrls: ['./teacher-student-data.component.scss']
})
export class TeacherStudentDataComponent implements OnInit {

  ALPHABET: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  dataSource = new MatTableDataSource<StudentGrade>(GRADE_DATA);
  displayedColumns: string[] = ['name', ...this.ALPHABET];
  studentId = 'Select Student';
  studentList = [
    {value: 'Chris', viewValue: '11111111'},
    {value: 'Heather', viewValue: '22222222'},
    {value: 'John', viewValue: '33333333'},
    {value: 'Cristian', viewValue: '44444444'},
  ];
  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.studentId = params['studentId'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

export interface StudentGrade {
  name: string,
  letters: string[],
}

const letterTestA: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(_ => Math.random() > 0.4);
const letterTestB: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(_ => Math.random() > 0.3);
const letterTestC: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(_ => Math.random() > 0.2);
const letterTestD: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(_ => Math.random() > 0.1);

const GRADE_DATA: StudentGrade[] = [
  {name: 'Lowercase ABCs Fall', letters: [...letterTestA]},
  {name: 'Uppercase ABCs Fall', letters: [...letterTestB]},
  {name: 'Lowercase ABCs Spring', letters: [...letterTestC]},
  {name: 'Lowercase ABCs Spring', letters: [...letterTestD]},
];

export const route = {
  component: TeacherStudentDataComponent,
  data: {},
  resolve: {}
};

