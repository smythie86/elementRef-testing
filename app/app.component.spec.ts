import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe("The AppComponent", () => {

    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ]
        });
        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
    });

    it("should have a message on the page", () => {
        const debugEl = fixture.debugElement;
        const h1 = debugEl.nativeElement.querySelector('h1');
        expect(h1.textContent).toEqual('AppComponent template');
    });

    it("should add an exclamation mark", () => {
        fixture.componentInstance.addIt();

        const debugEl = fixture.debugElement;
        const h1 = debugEl.nativeElement.querySelector('h1');
        expect(h1.textContent).toEqual('AppComponent template!');
    })

    it("should remove an the last character", () => {
        fixture.componentInstance.removeIt();

        const debugEl = fixture.debugElement;
        const h1 = debugEl.nativeElement.querySelector('h1');
        expect(h1.textContent).toEqual('AppComponent templat');
    })
});