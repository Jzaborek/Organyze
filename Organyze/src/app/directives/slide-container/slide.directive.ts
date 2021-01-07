import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[orgSlide]',
})
export class SlideDirective implements AfterContentInit {

  private static readonly LEFT_PADDING: number = 8;
  private static readonly SCROLLBAR_WIDTH: number = 32;
  private static readonly RIGHT_PADDING: number = SlideDirective.LEFT_PADDING + SlideDirective.SCROLLBAR_WIDTH;

  private minDeltaX: number = 0;
  private maxDeltaX: number = 0;
  private width: number = 0;

  public isMousePressed: boolean = false;
  @HostBinding('style.left.px') public deltaX: number = 0;
  @HostBinding('style.background-color') @Input() public color: string = '#333';

  // TODO: check performance on this component
  constructor(private element: ElementRef) {
    element.nativeElement.classList.add('org-slide');
  }

  private checkBounds(): void {
    if (this.deltaX < this.minDeltaX) {
      this.deltaX = this.minDeltaX;
    }
    if (this.deltaX > this.maxDeltaX) {
      this.deltaX = this.maxDeltaX;
    }
  }

  private updateWidth(): void {
    this.width = this.element.nativeElement.offsetWidth;
  }

  public ngAfterContentInit(): void {
    // TODO: come back to this, remove timeout, find place in component lifecycle to run these checks
    setTimeout(() => {
      this.onResize();
      if (this.width < window.innerWidth) {
        this.deltaX = this.minDeltaX;
      } else {
        this.deltaX = this.maxDeltaX;
      }
    }, 200);
  }

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event: MouseEvent): void {
    this.isMousePressed = true;
  }

  @HostListener('mouseup')
  public onMouseUp(): void {
    this.isMousePressed = false;
  }

  @HostListener('mousemove', ['$event'])
  public onMouseMove(event: MouseEvent): void {
    if (this.isMousePressed) {
      this.deltaX += event.movementX;
      this.checkBounds();
    }
  }

  // TODO: come back to this, moving too fast stops dragging
  //   - need to check parent element
  @HostListener('mouseleave', ['$event'])
  public onMouseLeave(event: MouseEvent): void {
    this.isMousePressed = false;
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.updateWidth();
    // TODO: make this size relative to parent, not window
    if (this.width < window.innerWidth) {
      this.minDeltaX = SlideDirective.LEFT_PADDING;
      this.maxDeltaX = window.innerWidth - this.width - SlideDirective.RIGHT_PADDING;
    } else {
      this.minDeltaX = window.innerWidth - this.width - SlideDirective.RIGHT_PADDING;
      this.maxDeltaX = SlideDirective.LEFT_PADDING;
    }
    this.checkBounds();
  }

}
