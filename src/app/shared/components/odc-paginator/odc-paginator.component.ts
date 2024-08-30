import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';

export interface IPaginator {
  pageSize: number;
  totalCount: number;
  pageIndex: number;
  firstElement: number;
  lastElement: number;
}

@Component({
  selector: 'odc-paginator',
  templateUrl: './odc-paginator.component.html',
  styleUrls: ['./odc-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OdcPaginatorComponent implements OnChanges{
  @Input() totalCount = 1;
  @Input() currentPage = 1;
  @Input() pageSize = 1;
  @Input() paginationDescription = 'Paginador default'; //representa un nombre aria del paginador
  @Output() pageChange = new EventEmitter<IPaginator>();

  ngOnChanges(): void {
    this.updatePage(Math.min(this.currentPage, this.totalPages));
  }

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.updatePage(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.updatePage(this.currentPage - 1);
    }
  }

  selectPage(page: number): void {
    if (this.currentPage !== page) {
      this.updatePage(page);
    }
  }

  updatePage(page: number): void {
    if (page > 0) {
      this.currentPage = page;
      const paginatorData: IPaginator = {
        pageSize: this.pageSize,
        totalCount: this.totalCount,
        pageIndex: this.currentPage - 1,
        firstElement: (this.currentPage - 1) * this.pageSize,
        lastElement: Math.min(this.currentPage * this.pageSize - 1, this.totalCount - 1),
      };
      this.pageChange.emit(paginatorData);
    }
  }

  get beforePages(): number {
    return Math.max(this.currentPage - 2, 1);
  }

  get afterPages(): number {
    return Math.min(this.currentPage + 2, this.totalPages);
  }

  createRange(start: number, size: number): number[] {
    return Array.from({ length: size - start + 1 }, (_, i) => start + i);
  }
}
