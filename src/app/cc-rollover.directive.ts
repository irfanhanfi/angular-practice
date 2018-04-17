import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';
import { debug } from 'util';

@Directive({
  selector: '[ccRollover]'
})
export class CcRolloverDirective {
  @HostBinding('src') private imagePath: string;
  @Input('ccRollover') config: Object = {
    initial: '',
    over: '',
  }

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    // debugger;
    // el.nativeElement
    // let part = el.nativeElement;//.querySelector(this.config['querySelector']) ;
    // renderer.setElementAttribute(part, 'src', this.config['initial']);
  }

  ngOnChanges() {
    if (this.config['initial']) {
      this.imagePath = this.config['initial'];
    }
  }

  @HostListener('mouseover') onMouseOver() { 
    this.imagePath = this.config['over'];
    // this.config.querySelector
    // let part = this.el.nativeElement;//.querySelector(this.config['querySelector']) ;
    // this.renderer.setElementAttribute(part, 'src', this.config['over']);
  }

  @HostListener('mouseout') onMouseOut() {
    // this.config.querySelector
    // let part = this.el.nativeElement;//.querySelector(this.config['querySelector']);
    // this.renderer.setElementAttribute(part, 'src', this.config['initial']);
    this.imagePath = this.config['initial'];
  }

}
