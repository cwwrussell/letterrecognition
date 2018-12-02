import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NavCardComponent} from './nav-card.component';
import {MatButtonModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    NavCardComponent
  ],
  exports: [
    NavCardComponent
  ]
})
export class NavCardModule {
}
