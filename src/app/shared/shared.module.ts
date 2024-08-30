import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { OdcTableComponent } from './components/odc-table/odc-table.component';
import { OdcPaginatorComponent } from './components/odc-paginator/odc-paginator.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { OdcLoadingSpinnerComponent } from './components/odc-loading-spinner/odc-loading-spinner.component';
import { OdcBarSearchComponent } from './components/odc-bar-search/odc-bar-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OdcFormErrorMessagesComponent } from './components/odc-form-error-messages/odc-form-error-messages.component';
import { OdcOverlayComponent } from './components/odc-overlay/odc-overlay.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { AlertModalComponent } from './components/modal/alert-modal/alert-modal.component';
import { ConfirmationModalComponent } from './components/modal/confirmation-modal/confirmation-modal.component';
import { NoticeModalComponent } from './components/modal/notice-modal/notice-modal.component';
import { SuccessModalComponent } from './components/modal/success-modal/success-modal.component';
import { OdcDropdownComponent } from './components/form/odc-dropdown/odc-dropdown.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { ExportExcelComponent } from './export-excel/export-excel.component';
import { OdcFileUploadComponent } from './components/odc-file-upload/odc-file-upload.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    CarruselComponent,
    TableHeaderComponent,
    TableBodyComponent,
    OdcTableComponent,
    OdcPaginatorComponent,
    OdcLoadingSpinnerComponent,
    OdcBarSearchComponent,
    OdcFormErrorMessagesComponent,
    OdcOverlayComponent,
    TarjetasComponent,
    AlertModalComponent,
    ConfirmationModalComponent,
    NoticeModalComponent,
    SuccessModalComponent,
    OdcDropdownComponent,
    FileSizePipe,
    ExportExcelComponent,
    OdcFileUploadComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    BreadcrumbComponent,
    CarruselComponent,
    OdcTableComponent,
    OdcPaginatorComponent,
    OdcLoadingSpinnerComponent,
    OdcBarSearchComponent,
    OdcFormErrorMessagesComponent,
    OdcOverlayComponent,
    TarjetasComponent,
    OdcDropdownComponent,
    FileSizePipe,
    ExportExcelComponent,
    OdcFileUploadComponent,
  ]
})
export class SharedModule { }
