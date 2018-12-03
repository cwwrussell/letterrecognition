import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavCardLoadState} from '../../../../shared/components/nav-card/nav-card.component';

@Component({
  selector: 'letters-teacher-test-start',
  templateUrl: './teacher-test-start.component.html',
  styleUrls: ['./teacher-test-start.component.scss']
})
export class TeacherTestStartComponent implements OnInit {
  loadState = NavCardLoadState.loading;
  title = 'Loading';
  loadingMessage = `Connecting to student's device.`;
  testLink = 'test';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.loadState = NavCardLoadState.loading;
    // mimic a loading / communication process
    setTimeout(() => {
      this.loadingMessage = 'Retrieving test data.';
    }, 2500);
    setTimeout(() => {
      this.loadState = NavCardLoadState.complete;
    }, 5000);
  }


  startTest() {
    this.router.navigate(['test'], {relativeTo: this.activatedRoute});
  }
}

export const route = {
  component: TeacherTestStartComponent,
  data: {},
  resolve: {}
};
