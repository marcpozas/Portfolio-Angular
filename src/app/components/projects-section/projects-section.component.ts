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

  constructor() {  }

  ngOnInit() {
    this.setupProjectDivClick();
  }

  setupProjectDivClick() {
    const projectDivs = document.querySelectorAll('.project-div');

    projectDivs.forEach((projectDiv) => {
      projectDiv.addEventListener('click', () => {
        console.log("ENTER");
        // Get the project class from the clicked div
        const projectClass = Array.from(projectDiv.classList).find((className) =>
          className.endsWith('-project')
        );
        console.log(projectClass);

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
