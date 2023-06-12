import { Component, OnInit } from '@angular/core';

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
  
  

}
