import { TestBed, ComponentFixture } from '@angular/core/testing';
import {Component} from "@angular/core";

import {WorkerBase} from "./worker.base";

describe("WorkerBase class", () => {

    let fixture: ComponentFixture<MyTestComponent>;
    let myWorker: WorkerBase;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MyTestComponent]
        });
        fixture = createTestComponent();
        fixture.detectChanges();
        myWorker = new WorkerBase(fixture);
    });

    it("should have a message on the page", () => {
        const debugEl = fixture.debugElement;
        const h1 = debugEl.nativeElement.querySelector('h1');
        expect(h1.textContent).toEqual('AppComponent template');
    });

    it("should add an exclamation mark", () => {
        myWorker.addIt();

        const debugEl = fixture.debugElement;
        const h1 = debugEl.nativeElement.querySelector('h1');
        expect(h1.textContent).toEqual('AppComponent template!');
    })

    it("should remove an the last character", () => {
        myWorker.removeIt();

        const debugEl = fixture.debugElement;
        const h1 = debugEl.nativeElement.querySelector('h1');
        expect(h1.textContent).toEqual('AppComponent templat');
    })
});

@Component({
    selector: 'app-root',
    template: `<h1 id="header">AppComponent template</h1>`
})
class MyTestComponent {}

function createTestComponent(): ComponentFixture<MyTestComponent> {
    return TestBed
        .createComponent(MyTestComponent);
}