import {BrowserAnimationsModule} from '@angular/platform-browser/Animations';
import {NgModule} from '@angular/core';

import {LettersRoutingModule} from './letters-routing.module';
import {LettersComponent} from './letters.component';
import {LandingPageComponent} from './shared/landing/landing-page/landing-page.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {NavCardComponent} from './shared/components/nav-card/nav-card.component';
import {NavbarModule} from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [
    LettersComponent,
    LandingPageComponent,
    NavCardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    LettersRoutingModule,
    MatButtonModule,
    MatCardModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [LettersComponent]
})
export class AppModule {
}
