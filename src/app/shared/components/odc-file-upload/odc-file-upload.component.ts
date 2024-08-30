import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IFileUploadConfig, IFileValidationResult } from '@shared/interface/file-upload.interface';

@Component({
  selector: 'odc-file-upload',
  templateUrl: './odc-file-upload.component.html',
  styleUrls: ['./odc-file-upload.component.scss']
})
export class OdcFileUploadComponent {

  @Input() config: IFileUploadConfig = {
    validExtensions: ['pdf', 'xls', 'xlsx'],
    validSize: 5 * 1024 * 1024,
    maximumQuantity: 1
  };
  @Output() fileSelected = new EventEmitter<File>();  // Emite el archivo seleccionado
  @Output() fileUploaded = new EventEmitter<File[]>();  // Emite el archivo cargado
  @Output() errorOccurred = new EventEmitter<string>();  // Emite el mensaje de error
  @Output() saved = new EventEmitter<boolean>();  // cargado

  selectedFiles: File[] = [];
  uploadedFiles: File[] = [];
  selectedFileName: string = '';
  loading: boolean = false;
  inputFileDisabled: boolean = false;
  canUpload: boolean = false;
  fileSaved: boolean = false;

  onFileSelect(event: any): void {
    const inputFile = event.target;
    const files: File = inputFile.files[0];
  
    this.selectedFiles = [];
    const validationResult = this.validateFiles(files);
  
    if (validationResult.invalidExtensions > 0 || validationResult.invalidSize > 0) {
      // Emite un evento para manejar errores en el componente padre, si es necesario
      const errorMessage = this.getErrorMessage(validationResult);
      this.errorOccurred.emit(errorMessage);  // Emite el mensaje de error al componente padre
    } else {
      this.selectedFiles.push(files);
      this.selectedFileName = this.selectedFiles.length > 1 ? `${this.selectedFiles.length} archivos seleccionados` : this.selectedFiles[0].name;
      this.canUpload = true;
      this.fileSelected.emit(this.selectedFiles[0]);  // Emite el archivo seleccionado
    }
  }

  validateFiles(file: File): IFileValidationResult {
    let invalidExtensions = 0;
    let invalidSize = 0;
  
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    if (!this.config.validExtensions.includes(extension)) {
      invalidExtensions++;
    } else if (file.size > this.config.validSize) {
      invalidSize++;
    }
  
    return {
      invalidExtensions,
      invalidSize
    };
  }

  uploadFiles(): void {
    this.loading = true;
    setTimeout(() => {
      const alreadyUploaded = this.uploadedFiles.some(file => file.name === this.selectedFiles[0].name);
      if (!alreadyUploaded) {
        this.uploadedFiles.push(this.selectedFiles[0]);
      }

      this.selectedFiles = [];
      this.selectedFileName = 'Sin archivo seleccionado';
      this.canUpload = false;
      this.loading = false;
      this.fileSaved = true;
      this.fileUploaded.emit(this.uploadedFiles);  // Emite los archivos cargados
    }, 2000);
  }

  getErrorMessage(validationResult: IFileValidationResult): string {
    if (validationResult.invalidExtensions > 0) {
      return validationResult.invalidExtensions > 1 ? 'Uno de los archivos no tiene una extensión válida.' : 'El archivo no tiene una extensión válida.';
    }
    if (validationResult.invalidSize > 0) {
      return validationResult.invalidSize > 1 ? 'Uno de los archivos excede el tamaño máximo permitido.' : 'El archivo excede el tamaño máximo permitido.';
    }
    return 'Error desconocido.';
  }

  removeFile(file: File): void {
    this.uploadedFiles = this.uploadedFiles.filter(f => f !== file);
    this.inputFileDisabled = this.uploadedFiles.length >= this.config.maximumQuantity;
    this.fileSaved = false;
    this.saved.emit(false);
  }
}
