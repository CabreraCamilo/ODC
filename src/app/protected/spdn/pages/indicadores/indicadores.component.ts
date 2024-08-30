import { Component, inject, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import messages from '@shared/i18n/es.json';
import { AlertService } from '@shared/services/alert/alert.service';
import { OdcOverlayService } from '@shared/components/odc-overlay/service/odc-overlay.service';
import { IndicadoresService } from '../../services/indicadores.service';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {

  readonly messages = messages;
  readonly messagesComponent = messages.indicadores;
  readonly tableHeader = this.messagesComponent.tableHeader;

  lstIndicadores: any = [];
  private fb = inject(NonNullableFormBuilder)
  isLoading = false;
  filaDatosSeleccionada: any = {};
  lstEjes: any[] = [];
  lstTiposIndicadores: any[] = [];
  lstObjetivos: any[] = [];
  lstEntidadesResponsables: any[] = [];

  filterForm = this.fb.group({
    eje: [null],
    objetivoEspecifico: [null],
    tipoIndicador: [null],
    entidadResponsable: [null],
    nombre: [null],
    filtro: [null as string | null],  // Permite null y string
  });

  selectedEje: any = null;
  selectedObjetivo: any = null;
  selectedTipoIndicador: any = null;
  selectedEntidadResponsable: any = null;

  // -
  showAvanceIndicador = false;  // Controla la visibilidad del componente de avance indicador
  selectedIndicador: any | null = null;  // Indicador seleccionado

  tableConfig = {
    columns: [
      // { title: this.tableHeader.fechaRegistro, field: 'fechaRegistro', pipe: 'date', pipeArgs: ['dd/MM/yyyy HH:mm'], width: "250px" },
      { title: this.tableHeader.id, field: "id", width: "50px" },
      { title: this.tableHeader.eje, field: "eje", width: "150px", sort: true },
      { title: this.tableHeader.objetivoEspecifico, field: "objetivoEspecifico", width: "250px", sort: true },
      { title: this.tableHeader.tipoIndicador, field: "tipoIndicador", width: "200px", sort: true },
      { title: this.tableHeader.nombre, field: "nombre", width: "200px", sort: true },
      { title: this.tableHeader.entidadResponsable, field: "entidadResponsable", width: "200px", sort: true },
      { title: this.tableHeader.ultimoPeriodoReportado, field: "ultimoPeriodoReportado", width: "150px", sort: true },
      { title: this.tableHeader.opciones, field: "opciones", "headerWidth": "100px", sort: true }
    ],
    pagination: true,
    itemsPerPage: 20,
    uniqueIdentifier: this.tableHeader.nombreOpcion,
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
    private alertService: AlertService
    , private overlayService: OdcOverlayService
    , private service: IndicadoresService
  ) { }

  ngOnInit(): void {
    this.fetchFilteredData();
    this.fetchEjes();
    this.fetchTiposIndicadores();
    this.fetchObjetivos();
    this.fetchEntidadesResponsables();
    // Cuando se quiere filtrar mientras se escribe o se seleciona
    /*this.filterForm.valueChanges.subscribe(val => {
      this.fetchFilteredData();
    });*/
  }

  // Definición de los campos del formulario
  get objetivoEspecifico(): FormControl {
    return this.filterForm.get('objetivoEspecifico') as FormControl;
  }

  fetchFilteredData(): void {
    this.isLoading = true;
    this.overlayService.show();
    const formValue = { ...this.filterForm.value };
    formValue.eje = formValue.eje ? formValue.eje : null;
    formValue.objetivoEspecifico = formValue.objetivoEspecifico ? formValue.objetivoEspecifico : null;

    console.log('formValue:', formValue);

    // Consulta la data
    this.service.obtenerIndicadores(formValue)
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
          this.lstIndicadores = response;
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

  fetchEjes() {
    this.service.obtenerEjes().subscribe({
      next: (response) => {
        this.lstEjes = response;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  fetchTiposIndicadores() {
    this.service.obtenerTiposIndicadores().subscribe({
      next: (response) => {
        this.lstTiposIndicadores = response;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  fetchObjetivos() {
    this.service.obtenerObjetivos().subscribe({
      next: (response) => {
        this.lstObjetivos = response;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  fetchEntidadesResponsables() {
    this.service.obtenerEntidadesResponsables().subscribe({
      next: (response) => {
        this.lstEntidadesResponsables = response;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  selectEje(combo: any) {
    //this.selectedEje = combo;
    this.filterForm.get('eje')?.setValue(combo);
  }

  selectTipoIndicador(combo: any) {
    //this.selectedTipoIndicador = combo;
    this.filterForm.get('tipoIndicador')?.setValue(combo);
  }

  selectObjetivo(combo: any) {
    //this.selectedTipoIndicador = combo;
    this.filterForm.get('objetivoEspecifico')?.setValue(combo);
  }

  selectEntidadResponsable(combo: any) {
    //this.selectedTipoIndicador = combo;
    this.filterForm.get('entidadResponsable')?.setValue(combo);
  }


  handleAccionClick(event: any): void {

    const filaDatos = event.rowData;
    this.filaDatosSeleccionada = filaDatos;
    const accion = event.action;

    const actionsHandler: { [key: string]: () => void } = {
      'Modificar': () => this.handleModificar(filaDatos),
    };

    if (Object.prototype.hasOwnProperty.call(actionsHandler, accion)) {
      actionsHandler[accion]();
    } else {
      console.warn(`Acción no soportada: ${accion}`);
    }
  }

  handleModificar(indicador: any) {
    this.selectedIndicador = indicador;
    this.showAvanceIndicador = true;
  }

  closeAvanceIndicador() {
    this.showAvanceIndicador = false;
    this.selectedIndicador = null;
  }

  receiveData(filter: string | undefined): void {
    // this.alert();
    // this.confirmar();
    // this.cancelar();
    this.exito();

    console.log('receiveData', filter);
    this.filterForm.patchValue({ filtro: filter });
    this.fetchFilteredData();
  }

  cancelar(): void {
    this.alertService.openNotice({
      title: '¿Está seguro de eliminar el registro?',
      buttons: [
        {
          text: messages.acciones.si,
          onClick: () => console.log('Enviar::'),
        },
        {
          text: messages.acciones.no,
          className: 'btn-primary btn-modal-govco btn-contorno',
        }
      ]
    })
  }

  alert(): void {
    this.alertService.openSuccess({
      title: 'title',
      content: 'messages.modificarOferente.solicitarActualizacionAlert.content',
    }, { size: 'lg' });
  }

  confirmar(): void {
    this.alertService.openConfirmation({
      title: `Confirmación`,
      content: `¿Está seguro de retirar la participación al programa?`,
      buttons: [
        {
          text: 'Aceptar',
          onClick: () => {
            console.log('Aceptar');
          },
        },

        {
          text: 'Cancelar',
          className: 'btn-contorno',
          onClick: () => {
            console.log('Cancelar');
          },
        },
      ]
    },);
  }

  exito(): void {
    this.alertService.open('success', {
      title: 'Sus datos han sido actualizados con éxito',
      content: `Señor usuario, nos permitimos informar que se ha registrado con éxito en nuestro
                sistema. <br/><br/>
                Coordialmente,<br/><br/>
                Ministerio de Justicia<br/>
                Proceso de validaciones`,
      buttons: [
        {
          text: 'Cerrar',
          // className: 'btn-contorno--marine',
        },
      ]
    },
      {
        modalDialogClass: 'dialog-success-program'
      });
  }

  validateForm() {

    if (this.filterForm.invalid) {
      // Marca todos los controles como tocados para mostrar errores
      this.filterForm.markAllAsTouched();
      return;
    }
  }
}
