import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LettersRoutingModule} from './letters-routing.module';
import {LettersComponent} from './letters.component';
import { LandingPageComponent } from './shared/landing/landing-page/landing-page.component';

@NgModule({
  declarations: [
    LettersComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    LettersRoutingModule,
  ],
  providers: [],
  bootstrap: [LettersComponent]
})
export class AppModule {
}
