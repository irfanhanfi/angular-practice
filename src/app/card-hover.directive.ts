import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary') private ishovering: boolean;
  
  // @Input('ccCardHover') config: any = {
  //   querySelector: '.card-text',
  // }
  
  // @Input('ccCardHover') config: {querySelector:string} = {
  //   querySelector:'.card-text'
  // };

  @Input('ccCardHover') config: Object = {
    querySelector: '.card-text',
  }

  constructor(private el: ElementRef,
    private renderer: Renderer) {
  }

  @HostListener('mouseover') onMouseOver() { 
    // this.config.querySelector
    let part = this.el.nativeElement.querySelector(this.config['querySelector']) ;
    this.renderer.setElementStyle(part, 'display', 'block'); 
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    // this.config.querySelector
    let part = this.el.nativeElement.querySelector(this.config['querySelector']);
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }

}
