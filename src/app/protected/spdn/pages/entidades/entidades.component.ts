import { Component, OnInit } from '@angular/core';
import { OdcOverlayService } from '@shared/components/odc-overlay/service/odc-overlay.service';
import messages from '@shared/i18n/es.json';
import { AlertService } from '@shared/services/alert/alert.service';
import { EntidadesService } from '../../services/entidades.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.scss']
})
export class EntidadesComponent implements OnInit {

  readonly messages = messages;
  readonly messagesComponent = messages.entidades;
  readonly tableHeader = this.messagesComponent.tableHeader;

  lstEntidades: any = [];
  filaDatosSeleccionada: any = {};
  isLoading = false;  

  tableConfig = {
    columns: [
      { title: this.tableHeader.codigo, field: "codigo", width: "20%", sort: true },
      { title: this.tableHeader.descripcion, field: "descripcion", width: "78%", sort: true },
      { title: this.tableHeader.activar, field: "opciones", "headerWidth": "20%" }
    ],
    pagination: true,
    itemsPerPage: 20,
    uniqueIdentifier: this.tableHeader.nombreOpcion,
    showCounter: false,
    actionsConfig: [
      { name: this.messages.acciones.activar },
      //{ name: this.messages.acciones.inactivar },
    ],
    widthOptions: 100,
    rowClasses: (row: any) => row.activo ? 'govcolor-green' : 'govcolor-orange',
    rowActions: (row: any) => {
      if (row.activo) {
        return [
          { name: this.messages.acciones.inactivar, icon: 'govco-times-cancel' },
        ];
      } else {
        return [
          { name: this.messages.acciones.activar, icon: 'govco-check-circle' },
        ];
      }
    }
  };

  constructor(
    private alertService: AlertService
    , private overlayService: OdcOverlayService
    , private service: EntidadesService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.isLoading = true;
    this.overlayService.show();

    // Consulta la data
    this.service.obtenerEntidades(null)
      .pipe(
        catchError(error => {
          console.error('An error occurred:', error);
          this.alertService.openAlert({
            title: this.messages.erroresGenerales.errorObtenerDatosTitle,
            content: error,
          });
          return of([]);
        }),
        finalize(() => {
          setTimeout(() => { // quitar cuando se use el back
            this.isLoading = false;
            this.overlayService.hide();
          }, 1000);
        })
      )
      .subscribe({
        next: (response: any) => {
          this.lstEntidades = response;
        },
        error: (error) => {
          console.error('An error occurred:', error);
          this.alertService.openAlert({
            title: this.messages.erroresGenerales.errorObtenerDatosTitle,
            content: this.messages.erroresGenerales.errorObtenerDatosContent,
          });
        }
      });
  }

  receiveData($event: any): void {
    console.log($event);
    this.fetchData();
  }

  handleAccionClick(event: any): void {

    const filaDatos = event.rowData;
    this.filaDatosSeleccionada = filaDatos;
    const accion = event.action;

    const actionsHandler: { [key: string]: () => void } = {
      'Activar': () => this.handleActivar(filaDatos),
      'Inactivar': () => this.handleInactivar(filaDatos),
    };

    if (Object.prototype.hasOwnProperty.call(actionsHandler, accion)) {
      actionsHandler[accion]();
    } else {
      console.warn(`Acción no soportada: ${accion}`);
    }
  }

  handleActivar(data: any): void {

  }

  handleInactivar(data: any): void {
    
  }


}
