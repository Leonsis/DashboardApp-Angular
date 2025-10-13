import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  
  isLoading = false;

  constructor(private router: Router) {}

  onSubmit() {
    console.log('🚀 onSubmit() foi chamado!');
    console.log('📧 Email:', this.loginData.email);
    console.log('🔒 Senha:', this.loginData.password);
    console.log('⏳ Loading:', this.isLoading);
    
    // Validação simples
    if (!this.loginData.email || !this.loginData.password) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    
    console.log('✅ Campos preenchidos, iniciando login...');
    this.isLoading = true;

    // Simular processo de login
    setTimeout(() => {
      console.log('🔍 Verificando credenciais...');
      if (this.loginData.email === 'admin' && this.loginData.password === 'admin') {
        console.log('✅ Login realizado com sucesso!');
        console.log('🔄 Redirecionando para o dashboard...');
        alert('Login realizado com sucesso! Redirecionando...');
        this.router.navigate(['/dashboard']);
      } else {
        console.log('❌ Credenciais inválidas');
        alert('Credenciais inválidas! Tente: admin/admin');
      }
      this.isLoading = false;
      console.log('🔄 Loading finalizado');
    }, 2000);
  }
}
