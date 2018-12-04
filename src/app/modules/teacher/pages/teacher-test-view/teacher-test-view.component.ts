import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, CanDeactivate, Router} from '@angular/router';
import {TestResolverService} from '../../../../shared/resolver/test/test-resolver.service';
import {TestQuestion} from '../../../../shared/service/test/test/test.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TestCardVisualizationType} from '../../../../shared/components/test-card/test-card.component';
import {fromEvent} from 'rxjs';
import {StudentResolverService} from '../../../../shared/resolver/student/student-resolver.service';
import {Student} from '../../../../shared/service/student/student.service';

interface TeacherTestViewData {
  test: {
    testQuestions: Array<TestQuestion>
    testName: string;
  };
  student: Student;
}

@Component({
  selector: 'letters-teacher-test-view',
  templateUrl: './teacher-test-view.component.html',
  styleUrls: ['./teacher-test-view.component.scss']
})
export class TeacherTestViewComponent implements OnInit, CanDeactivate<TeacherTestViewComponent> {
  testQuestions: Array<TestQuestion>;
  testForm: FormGroup;
  testQuestionsForm: FormArray;
  testName: string;
  student: Student;
  qList: Array<{
    sequencePos: number;
    formControl: FormControl;
    visualize: boolean;
    formControlName: string | number;
    testQuestion: TestQuestion;
    visualType: TestCardVisualizationType;
  }>;
  currentQuestionPos = 0;
  keyPressListener: any;
  timeElapsed = '00:00';
  private secondsElapsed = 0;
  private minutesElapsed = 0;
  private testComplete = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.testForm = this.fb.group({});
    this.testQuestionsForm = this.fb.array([]);
    this.keyPressListener = fromEvent(document, 'keydown').subscribe(e => {
      if (e['key'] === 'ArrowRight') {
        if (this.currentQuestionPos >= 0 && this.currentQuestionPos < this.qList.length - 1) {
          this.currentQuestionPos++;
        }
      }
      if (e['key'] === 'ArrowLeft') {
        if (this.currentQuestionPos > 0 && this.currentQuestionPos <= this.qList.length - 1) {
          this.currentQuestionPos--;
        }
      }
    });
    this.activatedRoute.data.subscribe((data: TeacherTestViewData) => {
      console.log('route data: ', data);
      if (data == null) {
        console.error('No data resolved for test view.');
      } else {
        if (data.test.testQuestions == null || data.test.testQuestions.length === 0) {
          this.testQuestions = new Array<TestQuestion>();
          console.error('Failed to retrieve test data');
        } else {
          this.testQuestions = data.test.testQuestions;
          this.testName = data.test.testName || '';
        }

        if (data.student == null) {
          this.student = {
            firstName: 'Jane',
            lastName: 'Doe',
            studentId: '12943948'
          };
          console.error('Failed to retrieve student data');
        } else {
          this.student = data.student;
        }
      }
      this.buildTestQuestions();
      this.buildForm();
    }, err => console.error(err));
    setInterval(() => {
      if (this.currentQuestionPos < this.qList.length - 1) {
        this.secondsElapsed++;
        if (this.secondsElapsed === 60) {
          this.minutesElapsed++;
          this.secondsElapsed = 0;
        }
        this.formatTimeElapsed();
      }
    }, 1000);
  }

  formatTimeElapsed() {
    this.timeElapsed = this.padNumber(this.minutesElapsed, 2) + ':' + this.padNumber(this.secondsElapsed, 2);
  }

  padNumber(number, width) {
    number = number + '';
    return number.length >= width ? number : new Array(width - number.length + 1).join('0') + number;
  }

  completeTest() {
    this.testComplete = true;
    this.router.navigate(['..', 'complete'], {relativeTo: this.activatedRoute});
  }

  buildForm() {
    this.testQuestionsForm = this.fb.array(this.qList.map(q => q.formControl));
    this.testForm = this.fb.group({
      testNotes: new FormControl(null),
      testQuestionsForm: this.testQuestionsForm,
    });
  }

  buildTestQuestions() {
    this.qList = this.testQuestions.map((q: TestQuestion, i) => {
      return {
        sequencePos: i,
        formControl: new FormControl(),
        visualize: true,
        formControlName: i,
        testQuestion: q,
        visualType: TestCardVisualizationType.TEXT
      };
    });
  }

  canDeactivate(): boolean {
    return this.testComplete;
  }

  get getTestQuestionFormControls(): FormArray {
    return this.testQuestionsForm;
  }
}

export const route = {
  component: TeacherTestViewComponent,
  data: {},
  resolve: {
    test: TestResolverService,
    student: StudentResolverService
  }
};
