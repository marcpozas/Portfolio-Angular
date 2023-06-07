import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isScrolled = false;

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