import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'frm-odc-dropdown',
  templateUrl: './odc-dropdown.component.html',
  styleUrls: ['./odc-dropdown.component.scss']
})
export class OdcDropdownComponent implements OnInit {
  @Input() label: string = 'Seleccionar';
  @Input() options: any[] = [];
  @Input() placeholder: string = 'Escoger';
  @Input() selectedOption: any = null;
  @Input() idKey: string = 'id';
  @Input() nameKey: string = 'name';
  @Input() control: FormControl | null = null; // Control de formulario para validación
  @Output() selectionChange = new EventEmitter<any>();

  dropdownId: string = 'dropdown' + Math.random().toString(36).substring(2, 9);

  ngOnInit(): void {}

  onSelect(option: any): void {
    this.selectedOption = option;
    if (this.control) {
      this.control.setValue(this.selectedOption[this.idKey]);
      this.control.markAsTouched();
    }
    this.selectionChange.emit(this.selectedOption);
  }

  getOptionName(option: any): string {
    return option ? option[this.nameKey] : '';
  }

  getOptionId(option: any): any {
    return option ? option[this.idKey] : null;
  }
}
