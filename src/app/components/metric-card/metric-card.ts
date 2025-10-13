import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric-card',
  imports: [CommonModule],
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.css'
})
export class MetricCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() color: string = 'primary';
  @Input() trend: string = '';
  @Input() trendValue: string = '';
  @Input() description: string = '';
}
