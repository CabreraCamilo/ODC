import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import messages from '@shared/i18n/es.json';
import { AvanceIndicadorService } from '../../services/avance-indicador.service';
import { AlertService } from '@shared/services/alert/alert.service';
import { OdcOverlayService } from '@shared/components/odc-overlay/service/odc-overlay.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError, finalize, of } from 'rxjs';
import { RegistrarAvanceModalComponent } from './registrar-avance-modal/registrar-avance-modal.component';

export enum AvanceIndicadorTabs {
  AvanceCuantitativo = 'AvanceCuantitativo',
  AvanceCostos = 'AvanceCostos',
}

@Component({
  selector: 'app-avance-indicador',
  templateUrl: './avance-indicador.component.html',
  styleUrls: ['./avance-indicador.component.scss']
})
export class AvanceIndicadorComponent implements OnInit {
  readonly messages = messages;
  readonly messagesComponent = messages.avanceIndicadores;
  readonly tableHeaderCuantitativos = this.messagesComponent.tableHeaderCuantitativos;

  @Input() indicador: any | null = null;
  @Output() close = new EventEmitter<void>();
  selectedTab: AvanceIndicadorTabs = AvanceIndicadorTabs.AvanceCuantitativo;  // Tab seleccionada por defecto

  isLoading = false;
  lstAvancesCuantitativos: any = [];
  lstAvanceCostos: any = [];
  filaDatosSeleccionada: any = {};

  get AvanceIndicadorTabs() {
    return AvanceIndicadorTabs;
  }

  tableConfig = {
    columns: [
      // { title: this.tableHeaderCuantitativos.fechaRegistro, field: 'fechaRegistro', pipe: 'date', pipeArgs: ['dd/MM/yyyy HH:mm'], width: "250px" },
      { title: this.tableHeaderCuantitativos.entidad, field: "entidad", width: "50px", sort: true },
      { title: this.tableHeaderCuantitativos.usuario, field: "usuario", width: "150px", sort: true },
      { title: this.tableHeaderCuantitativos.meta, field: "meta", width: "100px", sort: true },
      { title: this.tableHeaderCuantitativos.observacion, field: "observacion", width: "200px", sort: true },
      { title: this.tableHeaderCuantitativos.fechaEnvio, field: "fechaEnvio", width: "150px", sort: true },
      { title: this.tableHeaderCuantitativos.periodoReportado, field: "periodoReportado", width: "150px", sort: true },
      { title: this.tableHeaderCuantitativos.avanceReportado, field: "avanceReportado", width: "150px", sort: true },
      { title: this.tableHeaderCuantitativos.descripcionAvance, field: "descripcionAvance", width: "250px", sort: true },
      { title: this.tableHeaderCuantitativos.estado, field: "estado", width: "100px" },
      { title: this.tableHeaderCuantitativos.opciones, field: "opciones", headerWidth: "100px" }
    ],
    pagination: true,
    itemsPerPage: 20,
    uniqueIdentifier: this.tableHeaderCuantitativos.nombreOpcion,
    showCounter: false,
    actionsConfig: [
      { name: this.messages.acciones.modificar },
      //{ name: this.messages.acciones.inactivar },
    ],
    widthOptions: 100,
    //rowClasses: (row: any) => 'modificar',
    rowActions: (row: any) => {
      // console.log('row:', row);
      return [
        { name: this.messages.acciones.modificar, icon: 'govco-edit' },
        //{ name: this.messages.acciones.inactivar, icon: 'govco-times-cancel' },
      ];
    }
  };

  constructor(
    private service: AvanceIndicadorService
    , private alertService: AlertService
    , private overlayService: OdcOverlayService
    , private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    // Cargar la data del indicador
    this.getAvanceCuantitativo();
  }

  getAvanceCuantitativo() {
    this.isLoading = true;
    this.overlayService.show();
    // Consulta la data
    this.service.obtenerAvancesCuantitativosIndicador(this.indicador.id)
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
          this.lstAvancesCuantitativos = response;
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

  getAvanceCosotos() {
    this.isLoading = true;
    this.overlayService.show();
    this.service.obtenerAvanceCostos(this.indicador.id)
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
          this.lstAvanceCostos = response;
        },
        error: (error) => {
          this.alertService.openAlert({
            title: this.messages.erroresGenerales.errorObtenerDatosTitle,
            content: this.messages.erroresGenerales.errorObtenerDatosContent,
          });
        }
      });
  }

  selectTab(tab: AvanceIndicadorTabs) {
    this.selectedTab = tab;  // Cambia la pestaña seleccionada
    if (tab === AvanceIndicadorTabs.AvanceCostos)
      this.getAvanceCosotos();
  }

  closeAvence() {
    this.close.emit();  // Emite el evento para cerrar el componente y volver a la lista
  }

  receiveData(data: any): void {

  }

  /**
   * 
   * @param event  evento del boton
   * @param tipo   1 para avance cuantitativo, 2 para avance costos
   */
  handleAccionClick(event: any, tipo: number): void {

    const filaDatos = event.rowData;
    this.filaDatosSeleccionada = filaDatos;
    const accion = event.action;

    const actionsHandler: { [key: string]: () => void } = {
      'Modificar': () => tipo == 1 ? this.handleModificar(filaDatos) : this.handleModificarAvanceCostos(filaDatos),
      // 'Inactivar': () => this.handleDesactivar(filaDatos),
    };

    if (Object.prototype.hasOwnProperty.call(actionsHandler, accion)) {
      actionsHandler[accion]();
    } else {
      console.warn(`Acción no soportada: ${accion}`);
    }
  }

  handleNuevoAvanceCuantitativo(): void {
    const modalRef = this.modalService.open(RegistrarAvanceModalComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
    });

    modalRef.componentInstance.edit = false;
    modalRef.componentInstance.data = {};
    modalRef.componentInstance.data.AvanceCostos = false;

    // Escuchar el resultado del modal
    modalRef.result.then(
      (result) => {
        console.log('Modal cerrado con: ', result);
        // Aquí puedes recargar la página o realizar otra acción después de guardar
      },
      (reason) => {
        console.log('Modal cerrado sin guardar cambios: ', reason);
        // Aquí puedes manejar el cierre del modal sin guardar cambios
      }
    );
  }

  handleModificar(data: any): void {
    const modalRef = this.modalService.open(RegistrarAvanceModalComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
    });

    // Pasar data al modal
    modalRef.componentInstance.edit = true;
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.data.AvanceCostos = false;

    // Escuchar el resultado del modal
    modalRef.result.then(
      (result) => {
        console.log('Modal cerrado con: ', result);
        // Aquí puedes recargar la página o realizar otra acción después de guardar
      },
      (reason) => {
        console.log('Modal cerrado sin guardar cambios: ', reason);
        // Aquí puedes manejar el cierre del modal sin guardar cambios
      }
    );
  }


  handleNuevoAvanceCostos(): void {
    const modalRef = this.modalService.open(RegistrarAvanceModalComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
    });

    // Pasar data al modal
    modalRef.componentInstance.edit = false;
    modalRef.componentInstance.data = {};
    modalRef.componentInstance.data.AvanceCostos = true;
    // Escuchar el resultado del modal
    modalRef.result.then(
      (result) => {
        console.log('Modal cerrado con: ', result);
        // Aquí puedes recargar la página o realizar otra acción después de guardar
      },
      (reason) => {
        console.log('Modal cerrado sin guardar cambios: ', reason);
        // Aquí puedes manejar el cierre del modal sin guardar cambios
      }
    );
  }

  handleModificarAvanceCostos(data: any): void {
    const modalRef = this.modalService.open(RegistrarAvanceModalComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
    });

    // Pasar data al modal
    modalRef.componentInstance.edit = true;
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.data.AvanceCostos = true;

    // Escuchar el resultado del modal
    modalRef.result.then(
      (result) => {
        console.log('Modal cerrado con: ', result);
        // Aquí puedes recargar la página o realizar otra acción después de guardar
      },
      (reason) => {
        console.log('Modal cerrado sin guardar cambios: ', reason);
        // Aquí puedes manejar el cierre del modal sin guardar cambios
      }
    );
  }


}
