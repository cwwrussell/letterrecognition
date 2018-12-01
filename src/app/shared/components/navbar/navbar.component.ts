import {Component, Input, OnInit} from '@angular/core';

export interface NavItem {
  label: string;
  routeTo: string;
}

@Component({
  selector: 'letters-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  _render = true;

  @Input()
  navItems: NavItem[];

  constructor() { }

  ngOnInit() {
    if (this.navItems == null || this.navItems.length === 0) {
      console.error(typeof this + 'cannot be empty');
      setTimeout(() => this._render = false, 0);
    }
  }

  get render(): boolean {
    return this._render;
  }
}
