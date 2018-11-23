import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'letters-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.scss']
})
export class NavCardComponent implements OnInit {
  render: boolean;

  @Input()
  title: string;

  @Input()
  buttonText = 'Go';

  @Input()
  linkTo: string | Array<string> = '';

  @Input()
  imgSrc: string;

  constructor() {
  }

  ngOnInit() {
    if (this.validateFields()) {
      if (typeof this.linkTo === 'object' && this.linkTo.length > 0) {
        this.linkTo = '/' + this.linkTo.join('/');
      }
    }
  }

  /**
   * validateFields
   * params: void
   * return: boolean
   *
   * purpose: checks whether all required input fields are valid,
   * sets the render state respectively
   */
  validateFields(): boolean {
    return this.render = !!this.buttonText && (!this.linkToIsNullOrEmpty() || !this.titleIsNull());
  }

  /**
   * linkToIsNullOrEmpty
   * params: void
   * return: boolean, false if the linkTo is null or empty, true if the linkTo is valid
   *
   * purpose: Checks whether the linkTo is valid and converts an array of route paths into a string
   *    (e.g. ['holidays','thanksgiving','dinner'] --> '/holidays/thanksgiving/dinner')
   *
   *    Displays a console error if the linkTo is not valid
   */
  linkToIsNullOrEmpty(): boolean {
    if (typeof this.linkTo === 'object' && this.linkTo.length > 0) {
      this.linkTo = '/' + this.linkTo.join('/');
    }
    if (!this.linkTo) {
      console.error('NavCard.linkTo attribute must not be null or empty.');
    }
    return !this.linkTo;
  }

  /**
   * titleIsNull
   * params: void
   * return: boolean, true if title is valid, false if title is null
   *
   * purpose: Checks whether the title is valid and displays a console error if not
   */
  titleIsNull(): boolean {
    if (!this.title) {
      console.error('NavCard.title attribute must not be null.');
    }
    return !this.title;
  }
}
