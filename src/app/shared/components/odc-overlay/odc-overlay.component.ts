import { Component, Input } from '@angular/core';

@Component({
  selector: 'odc-overlay',
  templateUrl: './odc-overlay.component.html',
  styleUrls: ['./odc-overlay.component.scss']
})
export class OdcOverlayComponent {
  @Input() isVisible: boolean = false;
  @Input() message: string = 'Cargando...'; // Mensaje opcional
}
