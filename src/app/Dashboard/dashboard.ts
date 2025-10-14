import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
import { NavbarComponent } from '../navbar/navbar';
import { TotalFiscalizationsComponent } from '../components/total-fiscalizations/total-fiscalizations';
import { CompletedFiscalizationsComponent } from '../components/completed-fiscalizations/completed-fiscalizations';
import { PendingFiscalizationsComponent } from '../components/pending-fiscalizations/pending-fiscalizations';
import { MonthlyGoalComponent } from '../components/monthly-goal/monthly-goal';
import { DonutChartComponent } from '../components/donut-chart/donut-chart';
import { GaugeChartComponent } from '../components/gauge-chart/gauge-chart';
import { LastFiscalizationsComponent } from '../components/last-fiscalizations/last-fiscalizations';
import { NextFiscalizationsComponent } from '../components/next-fiscalizations/next-fiscalizations';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SidebarComponent, NavbarComponent, TotalFiscalizationsComponent, CompletedFiscalizationsComponent, PendingFiscalizationsComponent, MonthlyGoalComponent, DonutChartComponent, GaugeChartComponent, LastFiscalizationsComponent, NextFiscalizationsComponent],
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
