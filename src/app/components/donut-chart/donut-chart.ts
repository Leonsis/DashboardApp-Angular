import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donut-chart',
  imports: [CommonModule],
  templateUrl: './donut-chart.html',
  styleUrl: './donut-chart.css'
})
export class DonutChartComponent {
  @Input() title: string = 'Situação das Empresas Ativas';
  @Input() data: any = {
    total: '1,234',
    items: [
      { label: 'Ativas', value: '987', color: '#28a745', percentage: 80 },
      { label: 'Inativas', value: '156', color: '#dc3545', percentage: 13 },
      { label: 'Pendentes', value: '91', color: '#ffc107', percentage: 7 }
    ]
  };
}
