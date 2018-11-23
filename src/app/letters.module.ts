import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LettersRoutingModule} from './letters-routing.module';
import {LettersComponent} from './letters.component';
import {LandingPageComponent} from './shared/landing/landing-page/landing-page.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {NavCardComponent} from './shared/components/nav-card/nav-card.component';

@NgModule({
  declarations: [
    LettersComponent,
    LandingPageComponent,
    NavCardComponent,
  ],
  imports: [
    BrowserModule,
    LettersRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [LettersComponent]
})
export class AppModule {
}
