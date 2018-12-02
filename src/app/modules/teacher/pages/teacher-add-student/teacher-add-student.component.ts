import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'letters-add-student',
  templateUrl: './teacher-add-student.component.html',
  styleUrls: ['./teacher-add-student.component.scss'],
})
export class TeacherAddStudentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TeacherAddStudentComponent>) {
  }

  handleDoneClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
