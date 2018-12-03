import { Injectable } from '@angular/core';

export enum TestQuestionType {VOCAL}
export enum Term {FALL, WINTER, SPRING, SUMMER}

export interface DateRange {
  start: Date;
  end: Date;
}

export interface TestQuestion {
  testQuestionId: string;
  questionText: string;
  correctAnswer: any;
  response?: any;
  notes?: string | Array<string>;
  options?: any;
  type: TestQuestionType;
  isCorrect?: (answer: any) => boolean;
  visualize?: boolean;
}

export interface TestResult {
  testResultId: string;
  dateStarted: Date;
  dateCompleted: Date;
  targetDate: Date | Term | DateRange;
  correct: number;
  incorrect: number;
  percentCorrect: number;
}

export interface Test {
  testQuestions: Array<TestQuestion>;
  dateStarted: Date;
  dateCompleted: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private readonly lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  private readonly upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() { }

  getTestQuestions(testId: string): Array<TestQuestion> {
    switch (testId) {
      case '1111':
        return this.buildTestQuestions(false);
      case '2222':
        return this.buildTestQuestions();
      case '3333':
        return this.buildTestQuestions(false);
      case '4444':
        return this.buildTestQuestions();
      default:
        return null;
    }
  }

  buildTestQuestions(upperCase: boolean = true, randomize: boolean = true): Array<TestQuestion> {
    const letters = upperCase ? this.upperCase.split('') : this.lowerCase.split('');
    if (randomize) {
      this.shuffle(letters);
    }
    return letters.map(letter => ({
      questionText: letter,
      testQuestionId: letter,
      correctAnswer: letter,
      response: null,
      options: null,
      type: TestQuestionType.VOCAL,
      visualize: true,
    }));
  }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
