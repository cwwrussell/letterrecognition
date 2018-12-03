import {Component, Input, OnInit} from '@angular/core';

export enum NavCardLoadState {
  loading, complete
}

@Component({
  selector: 'letters-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.scss']
})
export class NavCardComponent implements OnInit {
  public loadStates = NavCardLoadState;
  @Input()
  title: string;
  @Input()
  buttonText = 'Go';
  @Input()
  linkTo: string | Array<string> = '';
  @Input()
  imgSrc: string;
  @Input()
  loadState: NavCardLoadState;
  @Input()
  loadingMessage: string;

  constructor() {
  }

  _render: boolean;

  get render(): boolean {
    return this._render;
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
    const retVal = !!this.buttonText &&
      (!this.linkToIsNullOrEmpty() || !this.titleIsNull()) &&
      this.imageXorLoading();
    setTimeout(() => this._render = retVal, 0);
    return retVal;
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

  imageXorLoading(): boolean {
    if (this.loadState != null && !!this.imgSrc) {
      return false;
    } else {
      return this.loadState != null || !!this.imgSrc;
    }
  }
}
