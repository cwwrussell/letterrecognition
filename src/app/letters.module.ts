import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {LettersRoutingModule} from './letters-routing.module';
import {LettersComponent} from './letters.component';
import {LandingPageComponent} from './shared/landing/landing-page/landing-page.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {NavbarModule} from './shared/components/navbar/navbar.module';
import {NavCardModule} from './shared/components/nav-card/nav-card.module';

@NgModule({
  declarations: [
    LettersComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    LettersRoutingModule,
    MatButtonModule,
    MatCardModule,
    NavbarModule,
    NavCardModule,
  ],
  providers: [],
  bootstrap: [LettersComponent]
})
export class AppModule {
}
