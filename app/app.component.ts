import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 id="header">AppComponent template</h1>
  <input (click)="addIt()" type="button" value="Add text">
  <input (click)="removeIt()" type="button" value="Remove text">
  `
})
export class AppComponent {
  constructor(protected element: ElementRef) { }

  addIt(): void {
    let myElement = this.element.nativeElement.querySelector('#header');
    myElement.innerText = myElement.innerText + "!";
  }

  removeIt(): void {
    let myElement = this.element.nativeElement.querySelector('#header');
    myElement.innerText = myElement.innerText.substring(0, myElement.innerText.length - 1);
  }
}