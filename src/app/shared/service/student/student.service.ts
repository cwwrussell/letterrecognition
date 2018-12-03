import {Injectable} from '@angular/core';

export interface Student {
  studentId: string | number;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }

  getStudent(studentId: string): Student {
    switch (studentId) {
      case '11111111':
        return {
          firstName: 'Chris',
          lastName: 'Russell',
          studentId: '11111111'
        };
      case '222222222':
        return {
          firstName: 'Heather',
          lastName: 'Hyer',
          studentId: '222222222'
        };
      case '33333333333':
        return {
          firstName: 'John',
          lastName: 'Barton',
          studentId: '33333333333'
        };
      case '4444444444':
        return {
          firstName: 'Cristian',
          lastName: 'Landeros-Trinidad',
          studentId: '4444444444'
        };
      default:
        return null;
    }
  }

// {value: 'Chris', viewValue: '11111111'},
// {value: 'Heather', viewValue: '222222222'},
// {value: 'John', viewValue: '33333333333'},
// {value: 'Cristian', viewValue: '4444444444'}
}
