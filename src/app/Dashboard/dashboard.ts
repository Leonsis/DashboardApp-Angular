import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  title = 'Dashboard';
  welcomeMessage = 'Bem-vindo ao Dashboard!';
  
  constructor() {
    console.log('🎉 Dashboard carregado com sucesso!');
  }
}
