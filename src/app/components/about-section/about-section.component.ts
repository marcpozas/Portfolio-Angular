import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {

  title = "Sobre mí";
  // statements: string[] = [
  //   "Desde que descubrí mi pasión por la programación en 2020, me he dedicado a aprender y crear proyectos. Con 20 años y estudiando Ingeniería en Redes de Telecomunicación, estoy emocionado de sumergirme en el mundo del desarrollo web y aplicar mis habilidades tanto en el front-end como en el back-end.",
  //   "En mi papel actual como trainee en una empresa, he tenido la oportunidad de trabajar en diferentes áreas de diseño digital, incluyendo desarrollo front-end y back-end.",
  //   "Mi enfoque principal en este momento se centra en aprender y construir herramientas de inteligencia artificial. Siempre estoy ansioso por aprender y mantenerme actualizado en los avances tecnológicos."
  // ];

  statements: string[] = [
    "Desde que descubrí mi pasión por la programación en 2020, me he dedicado a aprender y desarrollar mis habilidades en este campo. Actualmente, tengo 20 años y estudio Ingenería en Redes de Telecomunicaciones.",
    "En mi papel actual como trainee, he tenido la oportunidad de trabajar en desarrollo web, tanto en front-end como back-end. Además, mi especialidad se centra en el uso de Python para la creación de soluciones tecnológicas.",
    "Mi enfoque principal en este momento se centra en aprender y construir herramientas de que me hagan evolucionar como desarrollador. Siempre estoy ansioso por aprender y mantenerme actualizado en los avances tecnológicos."
  ];

  contactMeButton = "Contáctame";
  aboutMeCV = "Mi CV"

  supportsWebP: boolean | undefined;

  constructor() {

  }

  ngOnInit() {
    const canvas = document.createElement('canvas');
    this.supportsWebP = canvas.toDataURL('image/webp').startsWith('data:image/webp');
  }

  public openPDF(): void {
    window.open('assets/pdf/CV.pdf', '_blank');
  }

}
