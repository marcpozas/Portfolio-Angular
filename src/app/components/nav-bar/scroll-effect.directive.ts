import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollEffect]'
})
export class ScrollEffectDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Check the scroll position and add/remove the CSS class accordingly
    if (window.pageYOffset > 0) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'mat-toolbar-initial');
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'mat-toolbar-initial');
    }
  }
}
