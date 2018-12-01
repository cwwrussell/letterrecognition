import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatRippleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule,
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule {
}
