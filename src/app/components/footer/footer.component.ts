import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialList: { name: string, href: string }[] = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { name: 'Github', href: 'https://github.com/' },
    { name: 'Instagram', href: 'https://www.instagram.com/' }
  ];

}
