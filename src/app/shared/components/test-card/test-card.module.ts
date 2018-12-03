import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestCardComponent} from './test-card.component';
import {MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
  ],
  declarations: [
    TestCardComponent
  ],
  exports: [
    TestCardComponent,
  ],
})
export class TestCardModule {
}
