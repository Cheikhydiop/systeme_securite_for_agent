import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faBars, 
  faSearch, 
  faBell, 
  faShoppingBag 
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <nav class="bg-white shadow-sm px-4 py-2 flex items-center justify-between border-b border-gray-200 w-full z-10">
      <div class="flex items-center">
        <button
          (click)="toggleSidebar.emit()"
          class="p-1 rounded-md hover:bg-gray-100"
        >
          <fa-icon [icon]="faBars" [size]="'lg'"></fa-icon>
        </button>
        <div class="flex-1 mx-10 hidden md:block">
          <div class="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              class="w-full max-w-md py-1 px-4 pl-4 pr-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
            <fa-icon [icon]="faSearch" class="absolute right-3 top-1.5 text-gray-400"></fa-icon>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="relative p-1">
          <fa-icon [icon]="faBell"></fa-icon>
          <span class="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">2</span>
        </button>
        <button class="relative p-1">
          <fa-icon [icon]="faShoppingBag"></fa-icon>
          <span class="absolute top-0 right-0 h-4 w-4 bg-green-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
        </button>
        <div class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            alt="Profile"
            class="h-8 w-8 rounded-full object-cover border border-gray-300"
          />
          <div class="ml-2 hidden md:block">
            <p class="text-xs font-medium">Aissata Diop</p>
            <p class="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Input() collapsed = false;
  
  // Définition des icônes
  faBars = faBars;
  faSearch = faSearch;
  faBell = faBell;
  faShoppingBag = faShoppingBag;
}