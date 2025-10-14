import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiscalizationItemComponent, FiscalizationItem } from '../fiscalization-item/fiscalization-item';

@Component({
  selector: 'app-next-fiscalizations',
  imports: [CommonModule, FiscalizationItemComponent],
  templateUrl: './next-fiscalizations.html',
  styleUrl: './next-fiscalizations.css'
})
export class NextFiscalizationsComponent implements OnInit {
  title = 'Suas Próximas Fiscalizações';
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
          id: '4',
          responsible: 'Ana Oliveira',
          municipality: 'Serra',
          visitDate: '20/10/2024',
          type: 'Fiscalização Regular',
          status: 'pending',
          statusText: 'Pendente'
        },
        {
          id: '5',
          responsible: 'Carlos Mendes',
          municipality: 'Cachoeiro de Itapemirim',
          visitDate: '22/10/2024',
          type: 'Fiscalização Especial',
          status: 'pending',
          statusText: 'Pendente'
        },
        {
          id: '6',
          responsible: 'Lucia Ferreira',
          municipality: 'Colatina',
          visitDate: '25/10/2024',
          type: 'Fiscalização Regular',
          status: 'pending',
          statusText: 'Pendente'
        },
        {
          id: '7',
          responsible: 'Roberto Alves',
          municipality: 'Linhares',
          visitDate: '28/10/2024',
          type: 'Fiscalização Regular',
          status: 'pending',
          statusText: 'Pendente'
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
