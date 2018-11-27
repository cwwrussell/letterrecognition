import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherTestCompleteComponent} from './teacher-test-complete.component';

describe('TeacherTestCompleteComponent', () => {
  let component: TeacherTestCompleteComponent;
  let fixture: ComponentFixture<TeacherTestCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherTestCompleteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTestCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
