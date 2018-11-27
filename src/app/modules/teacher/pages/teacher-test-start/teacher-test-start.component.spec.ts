import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherTestStartComponent} from './teacher-test-start.component';

describe('TeacherTestStartComponent', () => {
  let component: TeacherTestStartComponent;
  let fixture: ComponentFixture<TeacherTestStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherTestStartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTestStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
