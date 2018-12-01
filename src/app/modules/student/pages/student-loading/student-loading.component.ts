import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-student-loading',
  templateUrl: './student-loading.component.html',
  styleUrls: ['./student-loading.component.scss']
})
export class StudentLoadingComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    setTimeout(
      () => this.router.navigate(['sometestid'], {relativeTo: this.activatedRoute}),
      5000
    );
  }

}

export const route = {
  component: StudentLoadingComponent,
  data: {},
  resolve: {}
};
