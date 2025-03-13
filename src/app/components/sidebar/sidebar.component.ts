import { CommonModule } from '@angular/common';
import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faChevronDown,
  faChevronRight,
  faTachometerAlt,
  faList,
  faFileAlt,
  faBriefcase,
  faUsers,
  faCog,
  faSearch,
  faSignInAlt,
  faCalendarCheck,
  faUserShield,
  faClipboardList,
  faHandshake,
  faBell,
  faUserCog,
  faBuilding,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  template: `
    <aside
      [ngClass]="{
        'bg-white text-gray-700 min-h-screen fixed top-0 left-0 transition-all duration-300 ease-in-out z-10 lg:translate-x-0 border-r border-gray-200': true,
        'w-64': !collapsed,
        'w-16': collapsed,
        'translate-x-0': isOpen,
        '-translate-x-full': !isOpen
      }"
    >
      <div class="p-4 border-b border-gray-200 bg-gray-50 shadow-sm rounded-md">
        <div class="flex justify-center">
          <img src="assets/logo.png" alt="Logo" class="h-10">
        </div>
      </div>
      <nav class="mt-4">
        <ul>
          <li *ngFor="let item of menuItems" class="px-4 py-2 hover:bg-gray-100">
            <ng-container *ngIf="!item.children">
              <a [routerLink]="item.path" class="flex items-center space-x-3">
                <fa-icon [icon]="item.icon"></fa-icon>
                <span *ngIf="!collapsed">{{ item.label }}</span>
              </a>
            </ng-container>
            
            <ng-container *ngIf="item.children">
              <div 
                (click)="toggleSubmenu(item)"
                class="flex items-center justify-between cursor-pointer"
              >
                <div class="flex items-center space-x-3">
                  <fa-icon [icon]="item.icon"></fa-icon>
                  <span *ngIf="!collapsed">{{ item.label }}</span>
                </div>
                <fa-icon 
                  *ngIf="!collapsed"
                  [icon]="item.expanded ? faChevronDown : faChevronRight"
                ></fa-icon>
              </div>
              
              <ul *ngIf="item.expanded && !collapsed" class="ml-8 mt-2">
                <li *ngFor="let child of item.children" class="py-2 hover:bg-gray-100">
                  <a [routerLink]="child.path" class="flex items-center space-x-3">
                    <fa-icon [icon]="child.icon"></fa-icon>
                    <span>{{ child.label }}</span>
                  </a>
                </li>
              </ul>
            </ng-container>
          </li>
        </ul>
      </nav>
    </aside>
  `
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Input() isOpen = true;
  
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
  
  menuItems = [
    { path: '/login', label: 'Login', icon: faSignInAlt },
    { path: '/dashboard', label: 'Dashboard', icon: faTachometerAlt },
    { path: '/presence', label: 'Présence', icon: faCalendarCheck },
    { path: '/vigile', label: 'Vigiles', icon: faUserShield },
    { path: '/rapport', label: 'Rapports', icon: faClipboardList },
    { path: '/demande', label: 'Demandes', icon: faHandshake },
    { path: '/service', label: 'Services', icon: faBell },

    { 
      label: 'Paramètres', 
      icon: faCog,
      expanded: false,
      children: [
        { path: '/service', label: 'Services', icon: faBell },
        { path: '/utilisateurs', label: 'Utilisateurs', icon: faUserCog },
        { path: '/entreprise', label: 'Entreprise', icon: faBuilding },
        { path: '/securite', label: 'Sécurité', icon: faLock }
      ]
    }
  ];
  
  toggleSubmenu(item: any): void {
    item.expanded = !item.expanded;
  }
}