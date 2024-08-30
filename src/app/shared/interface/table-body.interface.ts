export interface TableColumn {
  title: string;
  field: string;
  bodyClass?: string;
  formatFn?: FormatFunction;
  pipe?: TablePipeType;
  pipeArgs?: any[];
  elementType?: string;
  elementTypeClass?: string;
  maxWidth?: string;
  width?: string;
  omitInTdGeneration?: boolean; /* Used to omit the column <td> in the table body */
}

export enum TablePipeType {
  DATE = 'date',
  SIZE = 'size',
}

export interface DataTableRow {
  [key: string]: string | number | Date | boolean | any;
}

export interface TableActionConfig {
  name: string;
  icon?: string;
}

type FormatFunction = (data: any) => any;
