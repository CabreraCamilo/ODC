import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OdcOverlayService } from '@shared/components/odc-overlay/service/odc-overlay.service';
import messages from '@shared/i18n/es.json';
import { PatternsValidatorEnum } from '@shared/interface/form-generic.model';
import { AvanceIndicadorService } from '../../../services/avance-indicador.service';

@Component({
  selector: 'app-registrar-avance-modal',
  templateUrl: './registrar-avance-modal.component.html',
  styleUrls: ['./registrar-avance-modal.component.scss']
})
export class RegistrarAvanceModalComponent implements OnInit {
  @Input() data: any; // Datos que se pasarán al componente
  @Input() edit: boolean = false; // Determina si se edita o se crea un nuevo registro

  readonly messages = messages;
  readonly messagesComponent = messages.avanceIndicadores;
  frmAvance: UntypedFormGroup;

  verDialogo = false;
  titulo: any = '';
  dataModal: any = {};
  // Listas
  lstMeses: any[] = [];
  selectedMes: any = null;

  lstAnios: any[] = [];
  selectedAnio: any = null;

  constructor(
    public formBuilder: FormBuilder
    , private service: AvanceIndicadorService
    , public activeModal: NgbActiveModal
    , private overlayService: OdcOverlayService) {
    this.frmAvance = this.formBuilder.group({
      mesPeriodo: [null, [Validators.required]],
      anioPeriodo: [null, [Validators.required]],
      avance: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20), Validators.pattern(PatternsValidatorEnum.NAMES)]],
      recurso: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20), Validators.pattern(PatternsValidatorEnum.NAMES)]],
      descripcion: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {

    if (this.data.AvanceCostos != null && this.data.AvanceCostos) {
      this.titulo = this.edit ? this.messagesComponent.modalAvanceCostosEditarTitle : this.messagesComponent.modalAvanceCostosNuevoTitle;
    } else {
      this.titulo = this.edit ? this.messagesComponent.modalCuantitativoEditarTitle : this.messagesComponent.modalCuantitativoNuevoTitle;
    }
    this.fetchMesesPeriodo();
  }

  get mesPeriodo(): FormControl {
    return this.frmAvance.get('mesPeriodo') as FormControl;
  }

  get anioPeriodo(): FormControl {
    return this.frmAvance.get('anioPeriodo') as FormControl;
  }

  get avance() {
    return this.frmAvance.get('avance');
  }

  get recurso() {
    return this.frmAvance.get('recurso');
  }

  get descripcion() {
    return this.frmAvance.get('descripcion');
  }

  setDataForm() {
    if (this.data) {
      const consPeriodo = this.lstMeses.find(mes => mes.id === this.data.idPeriodo);
      const consYear = this.lstAnios.find(a => a.id === this.data.idYear);
      this.selectedMes = consPeriodo;
      this.selectedAnio = consYear;
      this.verDialogo = true;
    }
  }

  fetchMesesPeriodo() {
    this.service.obtenerMesesPeriodo().subscribe({
      next: (response) => {
        this.lstMeses = response;
        this.fetchAniosPeriodo();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  fetchAniosPeriodo() {
    this.service.obtenerAniosPeriodo().subscribe({
      next: (response) => {
        this.lstAnios = response;
        this.setDataForm();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  saveModal() {
    this.overlayService.show();
    if (this.validateForm()) {
      // Guardar la data
      // Simulación de una operación que toma tiempo
      setTimeout(() => {
        console.log(this.frmAvance.value);
        this.activeModal.close(this.frmAvance.value); // Cierra el modal y envía los datos
        // Finaliza la operación
        this.overlayService.hide();
      }, 3000);

    } else this.overlayService.hide();

  }

  closeModal() {
    this.activeModal.dismiss('cancelar'); // Cierra el modal sin enviar datos
  }

  selectMes(mes: any): void {
    //this.selectedMes = combo;
    this.frmAvance.get('mesPeriodo')?.setValue(mes);
  }


  selectAnio(anio: any): void {
    this.anioPeriodo.setValue(anio);
  }

  validateForm(): boolean {
    if (this.frmAvance.invalid) {
      // Marca todos los controles como tocados para mostrar errores
      this.frmAvance.markAllAsTouched();
      return false;
    }
    return true;
  }



}
