import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiscalizationItemComponent, FiscalizationItem } from '../fiscalization-item/fiscalization-item';

@Component({
  selector: 'app-last-fiscalizations',
  imports: [CommonModule, FiscalizationItemComponent],
  templateUrl: './last-fiscalizations.html',
  styleUrl: './last-fiscalizations.css'
})
export class LastFiscalizationsComponent implements OnInit {
  title = 'Suas Últimas Fiscalizações';
  items: FiscalizationItem[] = [];
  loading = false;

  ngOnInit() {
    this.loadFiscalizations();
  }

  loadFiscalizations() {
    this.loading = true;
    
    // Simulação de carregamento
    setTimeout(() => {
      this.items = [
        {
          id: '1',
          responsible: 'João Silva',
          municipality: 'Vitória',
          visitDate: '15/10/2024',
          type: 'Fiscalização Regular',
          status: 'completed',
          statusText: 'Concluída'
        },
        {
          id: '2',
          responsible: 'Maria Santos',
          municipality: 'Vila Velha',
          visitDate: '12/10/2024',
          type: 'Fiscalização Especial',
          status: 'completed',
          statusText: 'Concluída'
        },
        {
          id: '3',
          responsible: 'Pedro Costa',
          municipality: 'Cariacica',
          visitDate: '10/10/2024',
          type: 'Fiscalização Regular',
          status: 'completed',
          statusText: 'Concluída'
        }
      ];
      this.loading = false;
    }, 1500);
  }

  onFiscalizationAccess(item: FiscalizationItem) {
    console.log('Acessando fiscalização:', item);
    alert(`Acessando fiscalização: ${item.responsible} - ${item.municipality}`);
  }
}
