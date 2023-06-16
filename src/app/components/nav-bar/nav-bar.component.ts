import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isScrolled = false;

  ngAfterViewInit() {
    const hamburguerElement = document.getElementById('hamburguer-icon');
    if (hamburguerElement) {
      hamburguerElement.addEventListener('click', () => this.hamburgerClick(hamburguerElement));
    }
  }

  hamburgerClick(element: HTMLElement) {
    console.log('Label clicked!');

    const navbarList = document.getElementById('navbar-list');

    if (!navbarList) {
      return;
    }
    if (navbarList.classList.contains('navbar-items-expanded')) {
      navbarList.classList.remove('navbar-items-expanded');
    } else {
      navbarList.classList.add('navbar-items-expanded');
    }
    // Handle your logic here
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset >= window.innerHeight;
  }

  @Output() scrollToSectionEvent = new EventEmitter<string>();

  scrollToSection(sectionId: string) {
    console.log("app-nav-bar found!");
    this.scrollToSectionEvent.emit(sectionId);
  }

  
}