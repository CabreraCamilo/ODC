import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ejes-tejedores',
  templateUrl: './ejes-tejedores.component.html',
  styleUrls: ['./ejes-tejedores.component.scss']
})
export class EjesTejedoresComponent implements OnInit {

  cardsDocumentos: any[] = [];

  data: any[] = [];
  regulacion: any = {};
  narrativas: any = {};
  diplomaCambio: any = {};
  tarjetaSeleccionada = 3;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.regulacion = { tipo: 3, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/enfoques1.png") };
    this.narrativas = { tipo: 3, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/Principios1.png") };
    this.diplomaCambio = { tipo: 3, id: 'diplomaCambio', preSelect: true, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/PP.png") };
  }

  escucharTarjeta(valor: any) {
    this.diplomaCambio.preSelect = false;
    this.tarjetaSeleccionada = valor;
  }

}
