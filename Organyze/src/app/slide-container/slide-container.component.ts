import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'org-slide-container',
  templateUrl: './slide-container.component.html',
  styleUrls: ['./slide-container.component.sass']
})
export class SlideContainerComponent implements OnInit {

  private maxDeltaX: number = 0;
  public isMousePressed: boolean = false;
  @HostBinding('style.left.px') public deltaX: number = 0;
  @HostBinding('style.background-color') @Input() color: string = '#333';
  @HostBinding('style.width.px') @Input() width: number = 100;
  @HostBinding('style.height.px') @Input() height: number = 100;

  private checkBounds(): void {
    if (this.deltaX < 0) {
      this.deltaX = 0;
    }
    if (this.deltaX > this.maxDeltaX) {
      this.deltaX = this.maxDeltaX;
    }
  }

  public ngOnInit(): void {
    this.onResize();
  }

  @HostListener('mousedown')
  public onMouseDown(): void {
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
  // @HostListener('mouseleave')
  // public onMouseLeave(): void {
  //   this.isMousePressed = false;
  // }

  @HostListener('window:resize')
  public onResize(): void {
    this.maxDeltaX = window.innerWidth - this.width - 30;
    this.checkBounds();
  }

}
