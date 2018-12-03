import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {TestQuestion, TestService} from '../../service/test/test-builder/test.service';

@Injectable({
  providedIn: 'root'
})
export class TestResolverService implements Resolve<Array<TestQuestion>> {

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<TestQuestion>> {
    const ts = new TestService();
    const testId = route.params['testId'];
    return of(ts.getTestQuestions(testId));
  }
}
