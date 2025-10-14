import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FiscalizationItem {
  id: string;
  responsible: string;
  municipality: string;
  visitDate: string;
  type: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  statusText: string;
}

@Component({
  selector: 'app-fiscalization-item',
  imports: [CommonModule],
  templateUrl: './fiscalization-item.html',
  styleUrl: './fiscalization-item.css'
})
export class FiscalizationItemComponent {
  @Input() item: FiscalizationItem | null = null;
  @Output() onAccess = new EventEmitter<FiscalizationItem>();

  onAccessClick() {
    if (this.item) {
      this.onAccess.emit(this.item);
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'pending': return 'status-pending';
      case 'in-progress': return 'status-in-progress';
      case 'completed': return 'status-completed';
      case 'cancelled': return 'status-cancelled';
      default: return 'status-pending';
    }
  }
}
