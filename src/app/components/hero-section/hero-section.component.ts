import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  constructor() {

  }

  ngOnInit() {
    // Perform component initialization tasks here
  }

  @Output() scrollToSectionEvent = new EventEmitter<string>();

  scrollToSection() {
    console.log("app-nav-bar found!");
    this.scrollToSectionEvent.emit("contactme-section");
  }
  
  

}
