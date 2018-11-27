import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'letters-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.scss']
})
export class StudentTestComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  completeTest() {
    this.router.navigate(['complete'], {relativeTo: this.activatedRoute});
  }
}

export const route = {
  component: StudentTestComponent,
  data: {},
  resolve: {}
};
