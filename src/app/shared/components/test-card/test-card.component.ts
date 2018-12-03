import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {TestQuestion} from '../../service/test/test/test.service';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export enum TestCardVisualizationType {
  IMAGE,
  TEXT,
}

export interface TestCardVisualizationParameters {
  imgSrc?: string;
  text?: string;
}

export interface TestCardCompleteEmission {
  testQuestionId: string;
  note: string;
}

@Component({
  selector: 'letters-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestCardComponent),
      multi: true
    }
  ]
})
export class TestCardComponent implements OnInit, ControlValueAccessor {
  incorrect = false;
  vTypes = TestCardVisualizationType;
  imgSrc: string;
  @Input()
  visualize: boolean;
  @Input()
  visualizationType: TestCardVisualizationType;
  @Input()
  visualizationParams: TestCardVisualizationParameters;
  @Input()
  testQuestion: TestQuestion;
  @Input()
  active: boolean;
  @Input()
  title: string;

  constructor() {
  }

  private _note = '';

  @Input()
  get note(): string {
    return this._note;
  }

  private _render = true;

  get render(): boolean {
    return this._render;
  }

  // set render(render: boolean) {
  //   setTimeout(() => this._render = render, 0);
  // }

  protected get visualizationData(): string {
    if (this.visualizationParams != null && !!this.visualizationParams.text) {
      return this.visualizationParams.text;
    } else {
      return this.testQuestion.questionText;
    }
  }

  ngOnInit() {
    this.validateFields();
  }

  toggleIncorrect(event) {
    this.incorrect = !this.incorrect;
  }

  propagateChange = (_: any) => {
  };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    this._note = value;
    this.propagateChange(this._note);
  }

  private validateFields() {
    // invalid test question
    if (this.testQuestion == null) {
      console.error('TestCard.testQuestion must not be empty.');
      setTimeout(() => this._render = false, 0);
      return;
    }

    if (this.visualize) {
      // invalid visualization type
      if (this.visualizationType == null || TestCardVisualizationType[this.visualizationType] == null) {
        console.error('TestCard.visualizationType must not be ' + this.visualizationType + '.');
        setTimeout(() => this._render = false, 0);
        return;
      }

      // visualization params
      if (this.visualizationParams != null) {
        // invalid visualization image
        if (this.visualizationType === TestCardVisualizationType.IMAGE &&
          !this.visualizationParams.imgSrc) {
          console.error('TestCard.visualizationParams.imgSrc must not be null when trying to visualize an image.');
          setTimeout(() => this._render = false, 0);
        }
        // invalid visualization text
        if ((this.testQuestion != null && !this.testQuestion.questionText) &&
          !this.visualizationParams.text) {
          console.error(`[TestCard]: To visualize text, one valid text member of the following types must exist:
            \n1: TestQuestion.questionText
            \n2: TestCard.visualizationParams.text`);
          setTimeout(() => this._render = false, 0);
        }
      }
    }
  }
}
