import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary') private ishovering: boolean;
  constructor(private el: ElementRef,
    private renderer: Renderer) {
  }

  @HostListener('mouseover') onMouseOver() { 
 
    let part = this.el.nativeElement.querySelector('.card-text') ;
    this.renderer.setElementStyle(part, 'display', 'block'); 
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }

}
