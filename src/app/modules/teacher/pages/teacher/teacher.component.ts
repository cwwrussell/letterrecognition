import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavItem} from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'letters-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  navItems: NavItem[];
  routeBase: string;
  testActive = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (!!params.teacherId) {
        this.routeBase = '/teacher/' + params.teacherId;
      } else {
        this.router.navigate(['']);
      }

      this.navItems = [
        {label: 'Home', routeTo: this.routeBase + '/home'},
        {label: 'Data', routeTo: this.routeBase + '/data'},
        {label: 'Settings', routeTo: this.routeBase + '/settings'},
      ];
    }, err => console.error(err));
  }

}

export const route = {
  component: TeacherComponent,
  data: {},
  resolve: {}
};
