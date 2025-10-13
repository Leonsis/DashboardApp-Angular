import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricCardComponent } from '../metric-card/metric-card';

@Component({
  selector: 'app-monthly-goal',
  imports: [CommonModule, MetricCardComponent],
  templateUrl: './monthly-goal.html',
  styleUrl: './monthly-goal.css'
})
export class MonthlyGoalComponent {
  metricData = {
    title: 'Meta Mensal',
    value: '85%',
    icon: 'fa-solid fa-arrow-up-9-1',
    color: 'info',
    trend: 'up',
    trendValue: '+3%',
    description: 'Progresso da meta mensal de fiscalização'
  };
}
