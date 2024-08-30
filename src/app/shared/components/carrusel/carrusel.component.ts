import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  verComponente: boolean;
  @Input() gestionComponte: any;
  data: any[] = [];

  constructor() { this.verComponente = false; }

  ngOnInit(): void {
    if (this.gestionComponte != null) {
      this.data = this.gestionComponte;
      this.verComponente = true;
    }
  }

}
