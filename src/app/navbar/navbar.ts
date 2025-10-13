import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  searchQuery = '';
  user = {
    name: 'Usuário',
    avatar: 'https://via.placeholder.com/40x40/007bff/ffffff?text=U'
  };

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Pesquisando:', this.searchQuery);
      // Implementar lógica de pesquisa aqui
    }
  }

  onLogin() {
    console.log('Login clicado');
    // Implementar lógica de login aqui
  }
}
