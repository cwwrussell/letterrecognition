import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './letters-routing.module';
import {LettersComponent} from './letters.component';
import {StudentModule} from './modules/student/student.module';
import {TeacherModule} from './modules/teacher/teacher.module';
import {LandingModule} from './modules/landing/landing.module';

@NgModule({
  declarations: [
    LettersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    StudentModule,
    TeacherModule,
  ],
  providers: [],
  bootstrap: [LettersComponent]
})
export class AppModule {
}
