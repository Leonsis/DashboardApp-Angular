import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricCardComponent } from '../metric-card/metric-card';

@Component({
  selector: 'app-total-fiscalizations',
  imports: [CommonModule, MetricCardComponent],
  templateUrl: './total-fiscalizations.html',
  styleUrl: './total-fiscalizations.css'
})
export class TotalFiscalizationsComponent {
  metricData = {
    title: 'Total de Fiscalizações',
    value: '1,234',
    icon: 'fas fa-clipboard-check',
    color: 'primary',
    trend: 'up',
    trendValue: '+12%',
    description: 'Fiscalizações realizadas no período'
  };
}
