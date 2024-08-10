import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrl: './portal-layout.component.css',
})
export class PortalLayoutComponent {
  currentYear: number = new Date().getFullYear();
}
