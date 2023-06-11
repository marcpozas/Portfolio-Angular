import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]'
})
export class ScrollAnimationDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const socials = this.elementRef.nativeElement;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const pixelsToMove = viewportHeight * 2; // 200vh is equal to 2 times the viewport height
    const offset = 0; // Adjust this value to control when the transition starts
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (scrolled / documentHeight) * 100;
    const scrolledPerecentageFirstVH = (scrolled / pixelsToMove*2) * 100
    // console.log(scrolledPerecentageFirstVH);

    if (scrolledPerecentageFirstVH < 114) {
      //this.renderer.addClass(socials, 'scrolled');
      this.renderer.setStyle(
        socials,
        'top',
        //`${80-scrolled/(scrolled+pixelsToMove)*100}%`
        `${scrolledPerecentageFirstVH+80-(scrolled/(scrolled+pixelsToMove)*100*1.7)}%`
      );
    }
  }
}
