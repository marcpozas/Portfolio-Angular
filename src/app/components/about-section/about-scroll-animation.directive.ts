import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[aboutScrollAnimation]'
})
export class AboutScrollAnimationDirective {
  private initialTop: string = '0';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const icon = this.elementRef.nativeElement;
    const computedStyles = window.getComputedStyle(icon);
    this.initialTop = computedStyles.getPropertyValue('top');
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const icon = this.elementRef.nativeElement;
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const computedStyles = window.getComputedStyle(icon);
    const initialTop = computedStyles.getPropertyValue('top');
    const iconPercentageHeight = parseFloat(initialTop) * 100 / viewportHeight;
    const iconInitialPercentageHeight = parseFloat(this.initialTop) * 100 / viewportHeight;
    const pixelsToMove = viewportHeight * 2;

    const scrolledPercentageFirstVH = (scrolled / pixelsToMove * 2) * 100;

    if (scrolledPercentageFirstVH < 200) {
      this.renderer.setStyle(
        icon,
        'top',
        `${iconInitialPercentageHeight + scrolledPercentageFirstVH/5}%`
      );
    }
  }
}





