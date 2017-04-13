export class WorkerBase {
    constructor(
        protected elementRef : any
    ){}

    addIt(): void {
    let myElement = this.elementRef.nativeElement.querySelector('#header');
    myElement.innerText = myElement.innerText + "!";
  }

  removeIt(): void {
    let myElement = this.elementRef.nativeElement.querySelector('#header');
    myElement.innerText = myElement.innerText.substring(0, myElement.innerText.length - 1);
  }
}