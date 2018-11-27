import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherTestViewComponent} from './teacher-test-view.component';

describe('TeacherTestViewComponent', () => {
  let component: TeacherTestViewComponent;
  let fixture: ComponentFixture<TeacherTestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherTestViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
