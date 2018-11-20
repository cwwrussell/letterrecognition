import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'letters-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

export const route = {
  component: LandingComponent,
  data: {},
  resolve: {}
};
