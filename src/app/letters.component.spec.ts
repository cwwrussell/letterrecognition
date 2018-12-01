import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LettersComponent} from './letters.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LettersComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LettersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'letters'`, async(() => {
    const fixture = TestBed.createComponent(LettersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('letters');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(LettersComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to letterrecognition!');
  }));
});
