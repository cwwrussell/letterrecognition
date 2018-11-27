import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherStudentDataComponent} from './teacher-student-data.component';

describe('TeacherStudentDataComponent', () => {
  let component: TeacherStudentDataComponent;
  let fixture: ComponentFixture<TeacherStudentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherStudentDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
