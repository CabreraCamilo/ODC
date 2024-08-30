import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'odc-form-error-messages',
  templateUrl: './odc-form-error-messages.component.html',
  styleUrls: ['./odc-form-error-messages.component.scss']
})
export class OdcFormErrorMessagesComponent {
  @Input() control: AbstractControl | null = null;

  get errorMessages(): string[] {
    if (!this.control || !this.control.errors || !(this.control.dirty || this.control.touched)) {
      return [];
    }

    const messages: string[] = [];
    
    if (this.control.errors['required']) {
      messages.push('Este campo es requerido.');
    }
    if (this.control.errors['minlength']) {
      messages.push(`Debe tener al menos ${this.control.errors['minlength'].requiredLength} caracteres.`);
    }
    if (this.control.errors['maxlength']) {
      messages.push(`No puede exceder los ${this.control.errors['maxlength'].requiredLength} caracteres.`);
    }
    if (this.control.errors['email']) {
      messages.push('Debe ser una dirección de correo electrónico válida.');
    }
    if (this.control.errors['pattern']) {
      messages.push('El formato ingresado no es válido.');
    }

    // Añadir más validaciones personalizadas si es necesario

    return messages;
  }
}
