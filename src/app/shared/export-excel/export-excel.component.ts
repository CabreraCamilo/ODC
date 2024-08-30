import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import messages from '@shared/i18n/es.json';
import { AlertService } from '@shared/services/alert/alert.service';
import { OdcOverlayService } from '@shared/components/odc-overlay/service/odc-overlay.service';

interface Column {
  title: string;
  field: string;
  width?: string;
}

interface DataRow {
  [key: string]: any;
}

@Component({
  selector: 'odc-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.scss']
})
export class ExportExcelComponent {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  @Input() fileName: string = 'data.xlsx';
  readonly messages = messages;

  constructor(
    private alertService: AlertService
    , private overlayService: OdcOverlayService
  ) {}

  exportToExcel(): void {
    if (!this.data || this.data.length === 0) {
      this.alertService.openAlert({
        title: this.messages.erroresGenerales.errorExportarExcelTitle,
        content: 'No hay datos para exportar',
      });
      return;
    }
  
    this.overlayService.show();
  
    let formattedData: DataRow[] = [];
    let columnTitles: string[] = [];
  
    if (this.columns && this.columns.length > 0) {
      // Filtrar columnas que tienen valores en los datos
      const validColumns = this.columns.filter(column =>
        this.data.some(row => row[column.field] !== undefined && row[column.field] !== null)
      );
  
      // Extraer los títulos de las columnas válidas
      columnTitles = validColumns.map(column => column.title);
  
      // Mapear los datos según los campos de las columnas válidas
      formattedData = this.data.map(row => {
        const rowData: DataRow = {};
        validColumns.forEach(column => {
          rowData[column.title] = row[column.field];
        });
        return rowData;
      });
    } else {
      // Si no hay columnas definidas, exporta la data tal cual
      formattedData = this.data;
      if (formattedData.length > 0) {
        columnTitles = Object.keys(formattedData[0]); // Usa las claves del primer objeto como títulos de las columnas
      }
    }
  
    // Crear la hoja de Excel
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(formattedData, { header: columnTitles });
  
    // Aplicar estilos a los encabezados si hay columnas definidas
    if (this.columns && this.columns.length > 0) {
      const range = XLSX.utils.decode_range(worksheet['!ref'] as string);
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: 0, c: C });
        if (!worksheet[cellAddress]) continue;
        worksheet[cellAddress].s = {
          font: { bold: true, color: { rgb: "FFFFFF" } }, // Negrita y color blanco
          fill: { fgColor: { rgb: "4F81BD" } }, // Fondo azul
          alignment: { horizontal: "center" } // Alinear al centro
        };
      }
    }
  
    const workbook: XLSX.WorkBook = {
      Sheets: { 'data': worksheet },
      SheetNames: ['data']
    };
  
    // Generar el archivo Excel y guardarlo
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array', cellStyles: true });
    this.saveAsExcelFile(excelBuffer, this.fileName);
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(data, fileName);
    this.overlayService.hide();
  }
}
