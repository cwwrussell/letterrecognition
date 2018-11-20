import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRoutingModule} from './landing-routing.module';
import {LandingComponent} from './pages/landing/landing.component';
import {LandingNavComponent} from './components/landing-nav/landing-nav.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [LandingComponent, LandingNavComponent]
})
export class LandingModule {
}
