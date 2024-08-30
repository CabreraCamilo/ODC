import { Component } from '@angular/core';
import messages from '@shared/i18n/es.json';
import { IFileUploadConfig } from '@shared/interface/file-upload.interface';

@Component({
  selector: 'app-plan-accion',
  templateUrl: './plan-accion.component.html',
  styleUrls: ['./plan-accion.component.scss']
})
export class PlanAccionComponent {

  readonly messages = messages;
  readonly messagesComponent = messages.planAccion;

  messageSuccess: string[] = [];
  messageError: string[] = [];
  messageErrorFile: string[] = [];
  fileSaved: boolean = false;

  // ------------------------------------------------
  // Inicio File
  // ------------------------------------------------
  config: IFileUploadConfig = {
    validExtensions: ['xls', 'xlsx'],
    validSize: 5 * 1024 * 1024, // 5 MB
    maximumQuantity: 5
  };

  ngOnInit(): void {
    // this.showErrorsFile();
  }

  closeAlert() {
    this.messageErrorFile = [];
  }

  showErrorsFile(): void {
    this.messageErrorFile.push('Pestaña: Ejes, fila #1, campo ID_Eje: El campo es obligatorio');
    this.messageErrorFile.push('Pestaña: Ejes, fila #2, campo ID_Eje: El campo es obligatorio');
    this.messageErrorFile.push('Pestaña: Ejes, fila #3, campo ID_Eje: El campo es obligatorio');
  }

  closeMessages(): void {
    setTimeout(() => {
      this.messageError = [];
      this.messageSuccess = [];
    }, 10000);
  }


  onFileSelected(file: File): void {
    console.log('Archivo seleccionado:', file);
  }

  onFilesUploaded(files: File[]): void {
    console.log('Archivos cargados:', files);
    this.messageSuccess = [];
    this.messageSuccess.push('Operación exitosa');
    this.fileSaved = true;
    this.closeMessages();
    this.showErrorsFile();
  }

  onErrorOccurred(error: string): void {
    this.messageError.push(error);
    this.closeMessages();
  }

  isFileSaved(saved: boolean): void {
    this.fileSaved = saved;
  }

}
