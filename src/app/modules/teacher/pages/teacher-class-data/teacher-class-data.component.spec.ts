import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeacherClassDataComponent} from './teacher-class-data.component';

describe('TeacherClassDataComponent', () => {
  let component: TeacherClassDataComponent;
  let fixture: ComponentFixture<TeacherClassDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherClassDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherClassDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
