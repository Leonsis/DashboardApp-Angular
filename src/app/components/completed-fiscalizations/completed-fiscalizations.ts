import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricCardComponent } from '../metric-card/metric-card';

@Component({
  selector: 'app-completed-fiscalizations',
  imports: [CommonModule, MetricCardComponent],
  templateUrl: './completed-fiscalizations.html',
  styleUrl: './completed-fiscalizations.css'
})
export class CompletedFiscalizationsComponent {
  metricData = {
    title: 'Fiscalizações Concluídas',
    value: '987',
    icon: 'fas fa-check-circle',
    color: 'success',
    trend: 'up',
    trendValue: '+8%',
    description: 'Fiscalizações finalizadas com sucesso'
  };
}
