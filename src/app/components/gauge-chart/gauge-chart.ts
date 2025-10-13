import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gauge-chart',
  imports: [CommonModule],
  templateUrl: './gauge-chart.html',
  styleUrl: './gauge-chart.css'
})
export class GaugeChartComponent {
  @Input() title: string = 'Meta Mensal de Fiscalização';
  @Input() data: any = {
    current: '85',
    target: '100',
    label: 'Meta Mensal',
    percentage: 85,
    color: '#007bff'
  };

  getStatusClass(): string {
    if (this.data.percentage >= 100) return 'status-completed';
    if (this.data.percentage >= 80) return 'status-good';
    if (this.data.percentage >= 60) return 'status-warning';
    return 'status-danger';
  }

  getStatusIcon(): string {
    if (this.data.percentage >= 100) return 'fas fa-check-circle';
    if (this.data.percentage >= 80) return 'fas fa-arrow-up';
    if (this.data.percentage >= 60) return 'fas fa-exclamation-triangle';
    return 'fas fa-arrow-down';
  }

  getStatusText(): string {
    if (this.data.percentage >= 100) return 'Meta Atingida';
    if (this.data.percentage >= 80) return 'Bom Progresso';
    if (this.data.percentage >= 60) return 'Atenção';
    return 'Abaixo da Meta';
  }
}
