import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentLoadingComponent} from './student-loading.component';

describe('StudentLoadingComponent', () => {
  let component: StudentLoadingComponent;
  let fixture: ComponentFixture<StudentLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentLoadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
