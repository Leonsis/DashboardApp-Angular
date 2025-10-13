import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  menuItems = [
    { name: 'Home', icon: 'fas fa-tachometer-alt', route: '/dashboard' },
    { name: 'Menu 1', icon: 'fas fa-cog', route: '/users' },
    { name: 'Menu 2', icon: 'fas fa-chart-bar', route: '/reports' },
    { name: 'Menu 3', icon: 'fa-solid fa-list', route: '/settings' },
    { name: 'Menu 4', icon: 'fas fa-cog', route: '/settings' },
    { name: 'Comunicados', icon: 'fa-solid fa-envelope', route: '/settings' },
    { name: 'Mapas', icon: 'fa-solid fa-location-dot', route: '/settings' }
  ];

  isCollapsed = false;
  searchQuery = '';

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Pesquisando no sidebar:', this.searchQuery);
      // Implementar lógica de pesquisa aqui
    }
  }
}
