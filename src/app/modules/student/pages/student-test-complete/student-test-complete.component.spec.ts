import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentTestCompleteComponent} from './student-test-complete.component';

describe('StudentTestCompleteComponent', () => {
  let component: StudentTestCompleteComponent;
  let fixture: ComponentFixture<StudentTestCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTestCompleteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTestCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
