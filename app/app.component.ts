import {Component, ElementRef} from '@angular/core';
import {WorkerBase} from './worker.base';

@Component({
  selector: 'app-root',
  template: `<h1 id="header">AppComponent template</h1>
  <input (click)="addIt()" type="button" value="Add text">
  <input (click)="removeIt()" type="button" value="Remove text">
  <input (click)="addItExternally()" type="button" value="Add text externally">
  <input (click)="removeItExternally()" type="button" value="Remove text externally">
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

  addItExternally(): void {
    let myWorker: WorkerBase = new WorkerBase(this.element);
    myWorker.addIt();
  }

  removeItExternally(): void {
    let myWorker: WorkerBase = new WorkerBase(this.element);
    myWorker.removeIt();
  }
}