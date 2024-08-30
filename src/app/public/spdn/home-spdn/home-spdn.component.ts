import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-home-spdn',
  templateUrl: './home-spdn.component.html',
  styleUrls: ['./home-spdn.component.scss']
})
export class HomeSpdnComponent implements OnInit {

  homeCargado = false;
  gestionComponte: any;

  pestanas = [
    { nombre: 'Inicio', seleccionada: true, fuente: 'Montserrat-Bold' },
    { nombre: 'Oxígeno', seleccionada: false, fuente: 'Montserrat-Medium' },
    { nombre: 'Asfixia', seleccionada: false, fuente: 'Montserrat-Medium' },
    { nombre: 'Ejes tejedores', seleccionada: false, fuente: 'Montserrat-Medium' },
    { nombre: 'Plan de acción', seleccionada: false, fuente: 'Montserrat-Medium' },
    { nombre: 'Formulación', seleccionada: false, fuente: 'Montserrat-Medium' }
  ];

  constructor(private service: GeneralService) { }

  ngOnInit(): void {
    this.service.getCarruselData().subscribe(data => {
      this.gestionComponte = data.DATA_BANDEJA;
      this.homeCargado = true;
    });
  }

  seleccionarPestana(index: number) {
    this.pestanas.forEach((pestana, i) => {
      pestana.seleccionada = i === index;
      pestana.fuente = i === index ? 'Montserrat-Bold' : 'Montserrat-Medium';
    });
  }
}
