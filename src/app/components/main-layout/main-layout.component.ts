import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-sidebar
        [isOpen]="sidebarOpen"
        [collapsed]="sidebarCollapsed">
      </app-sidebar>
      <div
        class="overflow-hidden"
        [ngClass]="{
          'transition-all duration-300': true,
          'lg:ml-64': sidebarOpen && !sidebarCollapsed,
          'lg:ml-16': sidebarOpen && sidebarCollapsed
        }">
        <app-navbar
          (toggleSidebar)="toggleSidebar()"
          [collapsed]="sidebarCollapsed">
        </app-navbar>
        <main class="p-4 overflow-auto">
          <ng-content></ng-content>
        </main>
        <footer class="text-center text-xs text-gray-500 py-4 border-t mt-10">
          Copyright © SONATEL SECURITE 2023. Tous Droits Réservés.
        </footer>
      </div>
      <div
        *ngIf="sidebarOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
        (click)="toggleSidebar()">
      </div>
    </div>
  `,
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  sidebarOpen = true;
  sidebarCollapsed = false;
  
  toggleSidebar() {
    if (window.innerWidth < 1024) {
      this.sidebarOpen = !this.sidebarOpen;
    } else {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    }
  }
}