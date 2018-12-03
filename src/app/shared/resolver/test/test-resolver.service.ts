import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Test, TestService} from '../../service/test/test/test.service';

@Injectable({
  providedIn: 'root'
})
export class TestResolverService implements Resolve<Test> {

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Test> {
    const ts = new TestService();
    const testId = route.params['testId'];
    return of(ts.getTestQuestions(testId));
  }
}
