import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'letters-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(router: Router) { }

  ngOnInit() {
  }

}

export const route = {
  component: LandingPageComponent,
  data: {},
  resolve: {}
};

