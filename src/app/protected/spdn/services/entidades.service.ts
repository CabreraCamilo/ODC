import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  constructor() { }

  obtenerEntidades(filter: any): Observable<any[]> {
    
    const data = [
      { codigo: 1, descripcion: "Ministerio de Salud", activo: true },
      { codigo: 2, descripcion: "Ministerio de Educación", activo: false },
      { codigo: 3, descripcion: "MinAmbiente", activo: false },
      { codigo: 4, descripcion: "MinDefensa", activo: true },
      { codigo: 5, descripcion: "MinJusticia", activo: true },
      { codigo: 6, descripcion: "Ministerio de Justicia y el Derecho", activo: true },
      { codigo: 7, descripcion: "Agencia Presidencial de Cooperación Internacional", activo: false },
      { codigo: 8, descripcion: "Ministerio de Transporte", activo: true },
      { codigo: 9, descripcion: "Ministerio de Cultura", activo: false },
      { codigo: 10, descripcion: "Ministerio de Minas y Energía", activo: true },
      { codigo: 11, descripcion: "Ministerio de Comercio, Industria y Turismo", activo: false },
      { codigo: 12, descripcion: "Ministerio de Tecnologías de la Información y las Comunicaciones", activo: true },
      { codigo: 13, descripcion: "Ministerio del Interior", activo: false },
      { codigo: 14, descripcion: "Ministerio de Hacienda y Crédito Público", activo: true },
      { codigo: 15, descripcion: "Ministerio de Relaciones Exteriores", activo: false },
      { codigo: 16, descripcion: "Ministerio de Agricultura y Desarrollo Rural", activo: true },
      { codigo: 17, descripcion: "Ministerio de Trabajo", activo: false },
      { codigo: 18, descripcion: "Ministerio de Ciencia, Tecnología e Innovación", activo: true },
      { codigo: 19, descripcion: "Ministerio de Vivienda, Ciudad y Territorio", activo: false },
      { codigo: 20, descripcion: "Ministerio de Justicia y el Derecho", activo: true },
      { codigo: 21, descripcion: "Departamento Administrativo de la Función Pública", activo: false },
      { codigo: 22, descripcion: "Departamento Nacional de Planeación", activo: true },
      { codigo: 23, descripcion: "Ministerio de Vivienda", activo: true },
      { codigo: 24, descripcion: "Ministerio de Minas", activo: false },
      { codigo: 25, descripcion: "Ministerio de Educación", activo: true },
      { codigo: 26, descripcion: "Ministerio de Transporte", activo: true },
      { codigo: 27, descripcion: "Ministerio de Cultura", activo: false },
      { codigo: 28, descripcion: "Ministerio de Hacienda", activo: true },
      { codigo: 29, descripcion: "Ministerio del Interior", activo: false },
      { codigo: 30, descripcion: "Ministerio de Justicia", activo: true }
    ];

    return of(data);
  }

}
