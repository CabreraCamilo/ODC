import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'odc-table',
  templateUrl: './odc-table.component.html',
  styleUrls: ['./odc-table.component.scss']
})
export class OdcTableComponent {
  @Input() datosTabla: any[] = [];
  @Input() registros: any[] = [];
  @Input() config: any;
  @Output() accionClick = new EventEmitter<any>();

  totalItems = 0;
  itemsPerPage = 10;
  currentPage = 1;
  itemsToShow: any[] = [];
  allItems: any[] = [];

  ngOnChanges(changes: any) {
    if (changes.datosTabla) {
      this.setData(changes.datosTabla.currentValue);
    }
  }

  setData(data: any) {
    this.allItems = data;
    this.totalItems = data.length;
    this.updateData();
  }

  onPageChange(e: any) {
    this.currentPage = e.pageIndex + 1;
    this.updateData();
  }

  updateData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.itemsToShow = this.allItems.slice(start, end);
  }

  onSort(event: { column: string, order: 'asc' | 'desc' }) {
    this.sortData(event.column, event.order);
  }

  sortData(column: string, order: 'asc' | 'desc') {
    this.itemsToShow.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) {
        return order === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

}
