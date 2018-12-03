import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TestResolverService} from '../../../../shared/resolver/test/test-resolver.service';
import {TestQuestion} from '../../../../shared/service/test/test-builder/test.service';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TestCardVisualizationType} from '../../../../shared/components/test-card/test-card.component';
import {fromEvent} from 'rxjs';

interface TeacherTestViewData {
  testQuestions: Array<TestQuestion>;
}

@Component({
  selector: 'letters-teacher-test-view',
  templateUrl: './teacher-test-view.component.html',
  styleUrls: ['./teacher-test-view.component.scss']
})
export class TeacherTestViewComponent implements OnInit {
  testQuestions: Array<TestQuestion>;
  testForm: FormGroup;
  testQuestionsForm: FormArray;
  testControl: AbstractControl;
  qList: Array<{
    sequencePos: number;
    formControl: AbstractControl;
    visualize: boolean;
    formControlName: string | number;
    testQuestion: TestQuestion;
    visualType: TestCardVisualizationType;
  }>;
  currentQuestionPos = 0;
  keyPressListener: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
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
    // this.buildForm();
    this.activatedRoute.data.subscribe((data: TeacherTestViewData) => {
      if (data == null) {
        console.error('No data resolved for test view.');
      } else {
        if (data.testQuestions == null || data.testQuestions.length === 0) {
          this.testQuestions = new Array<TestQuestion>();
          console.error('Failed to retrieve test data');
        } else {
          this.testQuestions = data.testQuestions;
        }
      }
      this.buildTestQuestions();
      this.buildForm();
      console.log('testForm: ', this.testForm);
      console.log('testQuestionsForm: ', this.testQuestionsForm);
    }, err => console.error(err));
  }

  completeTest() {
    this.router.navigate(['..', 'complete'], {relativeTo: this.activatedRoute});
  }

  buildForm() {
    this.testControl = new FormControl(null);
    this.testQuestionsForm = this.fb.array(this.qList.map(q => q.formControl));
    this.testForm = this.fb.group({
      testNotes: new FormControl(null),
      testQuestionsForm: this.testQuestionsForm,
      testControl: this.testControl
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

  getFormValue() {
    return null;
  }
}

export const route = {
  component: TeacherTestViewComponent,
  data: {},
  resolve: {
    testQuestions: TestResolverService
  }
};
