import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { NavbarComponent } from '../navbar/navbar';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SidebarComponent, NavbarComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  title = 'Dashboard';
  welcomeMessage = 'Bem-vindo ao Dashboard!';
  
  constructor() {
    console.log('🎉 Dashboard carregado com sucesso!');
  }
  
  toggleSidebar() {
    // Método para toggle do sidebar no mobile
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }
}
