import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataTableRow, TableActionConfig, TableColumn, TablePipeType } from '../../interface/table-body.interface';

@Component({
  selector: 'odc-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent {
  
  /** Datos que se mostrarán en la tabla */
  @Input() data: DataTableRow[] = [];

  /** Identificador único para trackBy */
  @Input() uniqueIdentifier!: string;

  /** Configuración de las columnas de la tabla */
  @Input() columns: TableColumn[] = [];

  /** Configuración de las acciones de la tabla */
  @Input() actionsConfig: TableActionConfig[] = [];

  /** Evento que se emite cuando se hace clic en una acción */
  @Output() actionClick = new EventEmitter<any>();

  /** Función para obtener la clase dinamicamente de una fila*/
  @Input() rowClassFn?: (row: DataTableRow) => string;

  /** Función para obtener las acciones dinamicamente de una fila*/
  @Input() rowActionsFn?: (row: any) => TableActionConfig[];

  /** Indica si se debe mostrar el contador de filas */
  @Input() showCounter = false;

  @Input() widthOptions: number = 100;

  constructor(private datePipe: DatePipe) { }

  /**
   * Función trackBy para mejorar el rendimiento de *ngFor
   * @param index - Índice del elemento
   * @param item - Elemento actual
   * @returns Identificador único del elemento
   */
  trackByFn(index: number, item: any): any {
    return item[this.uniqueIdentifier];
  }

  /**
   * Maneja el evento de clic en una acción
   * @param action - Nombre de la acción
   * @param rowData - Datos de la fila actual
   */
  handleAction(action: string, rowData: any) {
    this.actionClick.emit({ action, rowData });
  }

  /**
   * Formatea los datos de una columna
   * @param column - Configuración de la columna
   * @param data - Datos de la columna
   * @returns Datos formateados
   */
  formatData(column: TableColumn, data: any): any {
    if (column.formatFn) {
      return column.formatFn(data);
    }
    return this.transformUsingPipe(column, data);
  }

  /**
   * Transforma los datos de entrada utilizando un pipe definido en la configuración de la columna.
   * Si no se especifica ningún pipe en la configuración, se devolverán los datos sin cambios.
   *
   * @param column - Configuración de la columna que contiene información sobre qué pipe usar.
   * @param data - Datos de entrada que necesitan ser transformados.
   * @returns Los datos transformados basados en la configuración del pipe.
   */
  private transformUsingPipe(column: TableColumn, data: any): any {
    if (!column.pipe) {
      return data;
    }

    switch (column.pipe) {
      case TablePipeType.DATE:
        return this.datePipe.transform(data, ...(column.pipeArgs || []));
      default:
        return data;
    }
  }

  /**
   * Obtiene la clase de una fila
   * @param row - Datos de la fila
   * @returns Clase de la fila
   */
  getRowClass(row: DataTableRow): string {
    if (this.rowClassFn) {
      return this.rowClassFn(row);
    }
    return '';
  }
}
