import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public showBackToTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void{
    this.showBackToTop = window.scrollY > 300;
  }

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
