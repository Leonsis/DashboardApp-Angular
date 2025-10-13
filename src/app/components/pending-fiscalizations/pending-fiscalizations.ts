import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricCardComponent } from '../metric-card/metric-card';

@Component({
  selector: 'app-pending-fiscalizations',
  imports: [CommonModule, MetricCardComponent],
  templateUrl: './pending-fiscalizations.html',
  styleUrl: './pending-fiscalizations.css'
})
export class PendingFiscalizationsComponent {
  metricData = {
    title: 'Fiscalizações Pendentes',
    value: '156',
    icon: 'fas fa-clock',
    color: 'warning',
    trend: 'down',
    trendValue: '-5%',
    description: 'Fiscalizações aguardando processamento'
  };
}
