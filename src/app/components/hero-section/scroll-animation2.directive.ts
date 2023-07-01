import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollAnimation2]'
})
export class ScrollAnimation2Directive {
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const socials = this.elementRef.nativeElement;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const pixelsToMove = viewportHeight * 2; // 200vh is equal to 2 times the viewport height
    const scrolledPerecentageFirstVH = (scrolled / pixelsToMove*2) * 100

    if (scrolledPerecentageFirstVH >= 55) {
      this.renderer.addClass(socials, "about");
    } else {
      this.renderer.removeClass(socials, "about");
    }
  }
}
