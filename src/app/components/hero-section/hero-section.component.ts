import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {

  title = "Hola, soy Marc";
  subtitle = "Junior Developer";
  content = "Experiencia en Front End, Back End y desarrollo de aplicaciones";
  contactMeButton = "Contáctame";

  supportsWebP: boolean | undefined

  constructor() {

  }

  ngOnInit() {
    const canvas = document.createElement('canvas');
    this.supportsWebP = canvas.toDataURL('image/webp').startsWith('data:image/webp');
  }

  @Output() scrollToSectionEvent = new EventEmitter<string>();

  scrollToSection() {
    this.scrollToSectionEvent.emit("contactme-section");
  }
  

}
