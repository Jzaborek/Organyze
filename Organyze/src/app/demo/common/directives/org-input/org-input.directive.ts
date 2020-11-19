import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[orgInput]'
})
export class OrgInputDirective {

  constructor(element: ElementRef) {
    element.nativeElement.classList.add('org-input');
  }

}
