import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-oxigeno',
  templateUrl: './oxigeno.component.html',
  styleUrls: ['./oxigeno.component.scss']
})
export class OxigenoComponent implements OnInit {

  cardsDocumentos: any[] = [];

  data: any[] = [];
  transitoLicito: any = {};
  cuidadoAmbiente: any = {};
  vulnerabilidadDrogas: any = {};
  consumoSustancias: any = {};
  tarjetaSeleccionada = 4;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.transitoLicito = { tipo: 3, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/enfoques1.png") };
    this.cuidadoAmbiente = { tipo: 3, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/Principios1.png") };
    this.vulnerabilidadDrogas = { tipo: 3, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/PP.png") };
    this.consumoSustancias = { tipo: 3, id: 'consumoSustancias', preSelect: true, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/PP.png") };
  }

  

  escucharTarjeta(valor: any) {
    this.tarjetaSeleccionada = valor;
  }

}

