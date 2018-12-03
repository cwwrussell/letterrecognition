import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {TeacherTestViewComponent} from '../../../modules/teacher/pages/teacher-test-view/teacher-test-view.component';

@Injectable({
  providedIn: 'root'
})
export class UnfinishedTestGuard implements CanDeactivate<TeacherTestViewComponent> {
  canDeactivate(component: TeacherTestViewComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
    return component.canDeactivate() || window.confirm('If you leave this page now you may lose unsaved changes.');
  }
}
