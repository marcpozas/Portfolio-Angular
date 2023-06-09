import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {

  title = "Proyectos"
  subtitle = "Explora una colección de mis proyectos más destacados, donde he aplicado mi creatividad y habilidades en el campo de desarrollo de software."

  projectUrls: { [key: string]: string } = {
    'first-project': 'https://github.com/marcpozas/Dev-Discord-Bot',
    'second-project': 'https://github.com/marcpozas/PDF-to-JPG-Converter-Flask',
    'third-project': 'https://github.com/marcpozas/Amazon-Price-Checker'
  };

  supportsWebP: boolean | undefined;

  constructor() {  }

  ngOnInit() {
    const canvas = document.createElement('canvas');
    this.supportsWebP = canvas.toDataURL('image/webp').startsWith('data:image/webp');
    this.setupProjectDivClick();
  }

  setupProjectDivClick() {
    const projectDivs = document.querySelectorAll('.project-div');

    projectDivs.forEach((projectDiv) => {
      projectDiv.addEventListener('click', () => {
        // Get the project class from the clicked div
        const projectClass = Array.from(projectDiv.classList).find((className) =>
          className.endsWith('-project')
        );

        if (projectClass) {
          // Get the corresponding URL from the dictionary
          const projectUrl = this.projectUrls[projectClass];

          if (projectUrl) {
            // Redirect the user to the project URL
            window.open(projectUrl, '_blank');
          }
        }
      });
    });
  }
}
