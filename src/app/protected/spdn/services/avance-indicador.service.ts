import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvanceIndicadorService {

  constructor() { }

  obtenerAvancesCuantitativosIndicador(idIndicador: any): Observable<any[]> {

    const data = [
      { id: 1, entidad: "Entidad A", usuario: "Usuario X", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "12/02/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 80, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/1", idIndicador: 12 },
      { id: 2, entidad: "Entidad A", usuario: "Usuario Y", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "12/02/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 80, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/2", idIndicador: 5 },
      { id: 3, entidad: "Entidad B", usuario: "Usuario Y", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "12/02/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 80, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/3", idIndicador: 19 },
      { id: 4, entidad: "Entidad C", usuario: "Usuario Z", meta: 1100, observacion: "Lorem ipsum", fechaEnvio: "13/02/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 85, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/4", idIndicador: 3 },
      { id: 5, entidad: "Entidad D", usuario: "Usuario X", meta: 900, observacion: "Lorem ipsum", fechaEnvio: "14/02/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 70, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/5", idIndicador: 11 },
      { id: 6, entidad: "Entidad A", usuario: "Usuario Y", meta: 1200, observacion: "Lorem ipsum", fechaEnvio: "15/02/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 90, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/6", idIndicador: 7 },
      { id: 7, entidad: "Entidad B", usuario: "Usuario Z", meta: 1150, observacion: "Lorem ipsum", fechaEnvio: "16/02/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 85, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/7", idIndicador: 15 },
      { id: 8, entidad: "Entidad C", usuario: "Usuario X", meta: 950, observacion: "Lorem ipsum", fechaEnvio: "17/02/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 75, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/8", idIndicador: 18 },
      { id: 9, entidad: "Entidad D", usuario: "Usuario Y", meta: 1100, observacion: "Lorem ipsum", fechaEnvio: "18/02/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 88, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/9", idIndicador: 20 },
      { id: 10, entidad: "Entidad A", usuario: "Usuario Z", meta: 1200, observacion: "Lorem ipsum", fechaEnvio: "19/02/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 90, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/10", idIndicador: 4 },
      { id: 11, entidad: "Entidad B", usuario: "Usuario X", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "20/02/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 85, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/11", idIndicador: 13 },
      { id: 12, entidad: "Entidad C", usuario: "Usuario Y", meta: 1100, observacion: "Lorem ipsum", fechaEnvio: "21/02/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 88, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/12", idIndicador: 6 },
      { id: 13, entidad: "Entidad D", usuario: "Usuario Z", meta: 1050, observacion: "Lorem ipsum", fechaEnvio: "22/02/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 82, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/13", idIndicador: 17 },
      { id: 14, entidad: "Entidad A", usuario: "Usuario X", meta: 1150, observacion: "Lorem ipsum", fechaEnvio: "23/02/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 87, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/14", idIndicador: 9 },
      { id: 15, entidad: "Entidad B", usuario: "Usuario Y", meta: 1200, observacion: "Lorem ipsum", fechaEnvio: "24/02/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 89, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/15", idIndicador: 8 },
      { id: 16, entidad: "Entidad C", usuario: "Usuario Z", meta: 1100, observacion: "Lorem ipsum", fechaEnvio: "25/02/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 85, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/16", idIndicador: 10 },
      { id: 17, entidad: "Entidad D", usuario: "Usuario X", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "26/02/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 80, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/17", idIndicador: 14 },
      { id: 18, entidad: "Entidad A", usuario: "Usuario Y", meta: 1050, observacion: "Lorem ipsum", fechaEnvio: "27/02/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 84, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/18", idIndicador: 2 },
      { id: 19, entidad: "Entidad B", usuario: "Usuario Z", meta: 1150, observacion: "Lorem ipsum", fechaEnvio: "28/02/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 88, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/19", idIndicador: 1 },
      { id: 20, entidad: "Entidad C", usuario: "Usuario X", meta: 1200, observacion: "Lorem ipsum", fechaEnvio: "01/03/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 90, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/20", idIndicador: 16 },
      { id: 21, entidad: "Entidad D", usuario: "Usuario Y", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "02/03/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 80, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/21", idIndicador: 12 },
      { id: 22, entidad: "Entidad A", usuario: "Usuario Z", meta: 1100, observacion: "Lorem ipsum", fechaEnvio: "03/03/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 85, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/22", idIndicador: 3 },
      { id: 23, entidad: "Entidad B", usuario: "Usuario X", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "04/03/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 83, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/23", idIndicador: 7 },
      { id: 24, entidad: "Entidad C", usuario: "Usuario Y", meta: 1100, observacion: "Lorem ipsum", fechaEnvio: "05/03/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 85, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/24", idIndicador: 18 },
      { id: 25, entidad: "Entidad D", usuario: "Usuario Z", meta: 1050, observacion: "Lorem ipsum", fechaEnvio: "06/03/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 82, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/25", idIndicador: 20 },
      { id: 26, entidad: "Entidad A", usuario: "Usuario X", meta: 1200, observacion: "Lorem ipsum", fechaEnvio: "07/03/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 90, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/26", idIndicador: 19 },
      { id: 27, entidad: "Entidad B", usuario: "Usuario Y", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "08/03/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 80, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/27", idIndicador: 4 },
      { id: 28, entidad: "Entidad C", usuario: "Usuario Z", meta: 1150, observacion: "Lorem ipsum", fechaEnvio: "09/03/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 85, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/28", idIndicador: 10 },
      { id: 29, entidad: "Entidad D", usuario: "Usuario X", meta: 1100, observacion: "Lorem ipsum", fechaEnvio: "10/03/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 88, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/29", idIndicador: 8 },
      { id: 30, entidad: "Entidad A", usuario: "Usuario Y", meta: 1200, observacion: "Lorem ipsum", fechaEnvio: "11/03/2024", periodoReportado: "Marzo 2022", idPeriodo: 3, idYear: 2, avanceReportado: 90, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/30", idIndicador: 6 }
    ];

    // Aplicar el filtro
    const filteredData = data.filter(item => item.idIndicador === idIndicador);

    return of(filteredData);
  }

  obtenerAvanceCostos(idIndicador: any): Observable<any[]> {

    const data = [
      { id: 1, entidad: "Entidad A", usuario: "andres B", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "12/02/2024", periodoReportado: "Enero 2024", idPeriodo: 1, idYear: 4, avanceReportado: 80, descripcionAvance: "Lorem ipsum", estado: "Borrador", url: "/detalles/1", idIndicador: 12 },
      { id: 2, entidad: "Entidad A", usuario: "leo guerrero", meta: 1000, observacion: "Lorem ipsum", fechaEnvio: "12/02/2024", periodoReportado: "Febrero 2023", idPeriodo: 2, idYear: 3, avanceReportado: 80, descripcionAvance: "Lorem ipsum", estado: "Enviado", url: "/detalles/2", idIndicador: 5 },
    ];

    // Aplicar el filtro
    // const filteredData = data.filter(item => item.idIndicador === idIndicador);

    return of(data);
  }

  obtenerMesesPeriodo(): Observable<any[]> {
    return of([
      { id: 1, descripcion: 'Enero' },
      { id: 2, descripcion: 'Febrero' },
      { id: 3, descripcion: 'Marzo' },
      { id: 4, descripcion: 'Abril' },
      { id: 5, descripcion: 'Mayo' },
      { id: 6, descripcion: 'Junio' },
      { id: 7, descripcion: 'Julio' },
      { id: 8, descripcion: 'Agosto' },
      { id: 9, descripcion: 'Septiembre' },
      { id: 10, descripcion: 'Octubre' },
      { id: 11, descripcion: 'Noviembre' },
      { id: 12, descripcion: 'Diciembre' }
    ]);
  }

  obtenerAniosPeriodo(): Observable<any[]> {
    return of([
      { id: 1, descripcion: '2021' },
      { id: 2, descripcion: '2022' },
      { id: 3, descripcion: '2023' },
      { id: 4, descripcion: '2024' },
      { id: 5, descripcion: '2025' },
    ]);
  }

}
