import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherAddStudentComponent} from './teacher-add-student.component';

describe('TeacherAddStudentComponent', () => {
  let component: TeacherAddStudentComponent;
  let fixture: ComponentFixture<TeacherAddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherAddStudentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
