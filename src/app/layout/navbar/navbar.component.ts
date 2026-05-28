import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-navbar',
  imports: [CollapseModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public isCollapsed = true;

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
