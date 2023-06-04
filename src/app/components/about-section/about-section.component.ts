import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {

  title = "Sobre mí";
  statements: string[] = [
    "Desde que descubrí mi pasión por la programación en 2020, me he dedicado a aprender y crear proyectos. Con 20 años y estudiando Ingeniería en Redes de Telecomunicación, estoy emocionado de sumergirme en el mundo del desarrollo web y aplicar mis habilidades tanto en el front-end como en el back-end.",
    "En mi papel actual como trainee en una empresa, he tenido la oportunidad de trabajar en diferentes áreas de diseño digital, incluyendo desarrollo front-end y back-end.",
    "Mi enfoque principal en este momento se centra en aprender y construir herramientas de inteligencia artificial. Siempre estoy ansioso por aprender y mantenerme actualizado en los avances tecnológicos."
  ];
  contactMeButton = "Contáctame";

  constructor() {

  }

  ngOnInit() {
    // Perform component initialization tasks here
  }

}
