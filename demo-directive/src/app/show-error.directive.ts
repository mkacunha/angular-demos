import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[appShowError]'
})
export class ShowErrorDirective {

  constructor(private el: ElementRef, private _fg: ControlContainer) {
  }

  @HostListener('blur', ['$event'])
  toggleColor(event) {
    const control = this.el.nativeElement.name;
    this.el.nativeElement.insertAdjacentHTML('afterend', '<div class="two">two</div>');
    this.el.nativeElement.insertAdjacentHTML('afterend', '<div class="two">two</div>');
    this.el.nativeElement.insertAdjacentHTML('afterend', '<div class="two">two</div>');
    console.log(this.form.controls[control].errors);
  }

  get form() { return this._fg.formDirective ? (this._fg.formDirective as FormGroupDirective).form : null; }

}
