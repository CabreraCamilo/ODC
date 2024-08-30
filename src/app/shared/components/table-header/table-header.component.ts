import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableColumnHeader } from '../../interface/table-header.interface';

@Component({
  selector: 'odc-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent {
  @Input()
  columns: TableColumnHeader[] = [];
  sortColumn = 'asc';
  sortOrder: 'asc' | 'desc' = 'asc';
  @Output() sort = new EventEmitter<{ column: string, order: 'asc' | 'desc' }>();

  getWidth(header: TableColumnHeader): string {
    return header.width || header.headerWidth || 'auto';
  }


  toggleSort(header: any) {
    if (this.sortColumn === header.field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = header.field;
      this.sortOrder = 'asc';
    }
    this.sort.emit({ column: this.sortColumn, order: this.sortOrder });
  }
}
