import {Injectable} from '@angular/core';
import {Student, StudentService} from '../../service/student/student.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentResolverService implements Resolve<Student> {

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Student> {
    const studentId: string = route.params['studentId'];
    const ss = new StudentService();
    return of(ss.getStudent(studentId));
  }
}
