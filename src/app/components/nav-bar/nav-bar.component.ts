import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  hamburguerSymbol: string = "menu";
  isScrolled = false;

  ngAfterViewInit() {
    const hamburguerElement = document.getElementById('hamburguer-icon');
    if (hamburguerElement) {
      hamburguerElement.addEventListener('click', () => this.hamburgerClick(hamburguerElement));
    }
  }

  hamburgerClick(element: HTMLElement) {

    const navbarList = document.getElementById('navbar-list');

    if (!navbarList) {
      return;
    }
    if (navbarList.classList.contains('navbar-items-expanded')) {
      navbarList.classList.remove('navbar-items-expanded');
      this.hamburguerSymbol = 'menu';
    } else {
      navbarList.classList.add('navbar-items-expanded');
      this.hamburguerSymbol = 'clear';
    }
    // Handle your logic here
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset >= window.innerHeight;
  }

  @Output() scrollToSectionEvent = new EventEmitter<string>();

  scrollToSection(sectionId: string) {
    this.scrollToSectionEvent.emit(sectionId);
  }

  
}