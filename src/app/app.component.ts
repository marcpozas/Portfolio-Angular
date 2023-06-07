import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;
  @ViewChild('aboutSection', { static: true }) aboutSection!: ElementRef;
  @ViewChild('projectsSection', { static: true }) projectsSection!: ElementRef;
  @ViewChild('contactmeSection', { static: true }) contactmeSection!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  
  scrollToSection(sectionId: string) {
    if (sectionId === 'hero-section') {
      this.heroSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'about-section') {
      this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'projects-section') {
      this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'contactme-section') {
      this.contactmeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
