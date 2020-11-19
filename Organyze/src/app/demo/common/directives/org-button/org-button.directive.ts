import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[orgButton]'
})
export class OrgButtonDirective {

  constructor(element: ElementRef) {
    element.nativeElement.classList.add('org-button');
  }

}
