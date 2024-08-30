import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor() { }

  obtenerIndicadores(filter: any): Observable<any[]> {
    type IndicadorKey = 'eje' | 'objetivoEspecifico' | 'tipoIndicador' | 'nombre' | 'entidadResponsable' | 'ultimoPeriodoReportado';

    const data = [
      { id: 1, eje: "1-Eje uno", objetivoEspecifico: "1-Estandarizar oferta de xxxx", tipoIndicador: "Resultado impacto", idIndicador: 1, nombre: "Indicador de ciudadanos", entidadResponsable: "Entidad 1", ultimoPeriodoReportado: "Abril 2024" },
      { id: 2, eje: "1-Eje uno", objetivoEspecifico: "2-Bajar la oferta de xxxx", accionEstreategica: "Pendiente por definir", tipoIndicador: "Resultado producto", idIndicador: 2, nombre: "Indicador de ciudadanos", entidadResponsable: "Entidad 2", ultimoPeriodoReportado: "Abril 2024" },
      { id: 3, eje: "1-Eje uno", objetivoEspecifico: "3-Subir la oferta de xxxx", tipoIndicador: "Acción", nombre: "Ejecutar 10 proyectos", entidadResponsable: "Entidad 3", ultimoPeriodoReportado: "Abril 2024" },
      { id: 4, eje: "1-Eje dos", objetivoEspecifico: "1-Mejorar la calidad de xxxx", tipoIndicador: "Resultado impacto", idIndicador: 1, nombre: "Satisfacción de usuarios", entidadResponsable: "Entidad 4", ultimoPeriodoReportado: "Marzo 2024" },
      { id: 5, eje: "1-Eje dos", objetivoEspecifico: "2-Reducir costos de xxxx", accionEstreategica: "Pendiente por definir", tipoIndicador: "Resultado producto", idIndicador: 2, nombre: "Costo por unidad", entidadResponsable: "Entidad 5", ultimoPeriodoReportado: "Marzo 2024" },
      { id: 6, eje: "1-Eje dos", objetivoEspecifico: "3-Incrementar la eficiencia de xxxx", tipoIndicador: "Acción", nombre: "Optimización de recursos", entidadResponsable: "Entidad 6", ultimoPeriodoReportado: "Febrero 2024" },
      { id: 7, eje: "1-Eje tres", objetivoEspecifico: "1-Aumentar la cobertura de xxxx", tipoIndicador: "Resultado impacto", idIndicador: 1, nombre: "Cobertura nacional", entidadResponsable: "Entidad 7", ultimoPeriodoReportado: "Febrero 2024" },
      { id: 8, eje: "1-Eje tres", objetivoEspecifico: "2-Desarrollar nuevas soluciones xxxx", accionEstreategica: "Pendiente por definir", tipoIndicador: "Resultado producto", idIndicador: 2, nombre: "Nuevas implementaciones", entidadResponsable: "Entidad 8", ultimoPeriodoReportado: "Enero 2024" },
      { id: 9, eje: "1-Eje tres", objetivoEspecifico: "3-Incrementar la innovación en xxxx", tipoIndicador: "Acción", nombre: "Proyectos de innovación", entidadResponsable: "Entidad 9", ultimoPeriodoReportado: "Enero 2024" },
      { id: 10, eje: "2-Eje uno", objetivoEspecifico: "1-Mejorar la accesibilidad a xxxx", tipoIndicador: "Resultado impacto", idIndicador: 1, nombre: "Accesibilidad incrementada", entidadResponsable: "Entidad 10", ultimoPeriodoReportado: "Diciembre 2023" },
      { id: 11, eje: "2-Eje uno", objetivoEspecifico: "2-Reducir la brecha de xxxx", accionEstreategica: "Pendiente por definir", tipoIndicador: "Resultado producto", idIndicador: 2, nombre: "Brecha reducida", entidadResponsable: "Entidad 11", ultimoPeriodoReportado: "Diciembre 2023" },
      { id: 12, eje: "2-Eje uno", objetivoEspecifico: "3-Incrementar el acceso a xxxx", tipoIndicador: "Acción", nombre: "Acceso mejorado", entidadResponsable: "Entidad 12", ultimoPeriodoReportado: "Noviembre 2023" },
      { id: 13, eje: "2-Eje dos", objetivoEspecifico: "1-Mejorar la sostenibilidad de xxxx", tipoIndicador: "Resultado impacto", idIndicador: 1, nombre: "Sostenibilidad alcanzada", entidadResponsable: "Entidad 13", ultimoPeriodoReportado: "Noviembre 2023" },
      { id: 14, eje: "2-Eje dos", objetivoEspecifico: "2-Fomentar la participación en xxxx", accionEstreategica: "Pendiente por definir", tipoIndicador: "Resultado producto", idIndicador: 2, nombre: "Participación ciudadana", entidadResponsable: "Entidad 14", ultimoPeriodoReportado: "Octubre 2023" },
      { id: 15, eje: "2-Eje dos", objetivoEspecifico: "3-Incrementar la cooperación en xxxx", tipoIndicador: "Acción", nombre: "Proyectos cooperativos", entidadResponsable: "Entidad 15", ultimoPeriodoReportado: "Octubre 2023" },
      { id: 16, eje: "2-Eje tres", objetivoEspecifico: "1-Mejorar la eficiencia energética de xxxx", tipoIndicador: "Resultado impacto", idIndicador: 1, nombre: "Eficiencia energética", entidadResponsable: "Entidad 16", ultimoPeriodoReportado: "Septiembre 2023" },
      { id: 17, eje: "2-Eje tres", objetivoEspecifico: "2-Reducir la huella de carbono de xxxx", accionEstreategica: "Pendiente por definir", tipoIndicador: "Resultado producto", idIndicador: 2, nombre: "Reducción de carbono", entidadResponsable: "Entidad 17", ultimoPeriodoReportado: "Septiembre 2023" },
      { id: 18, eje: "2-Eje tres", objetivoEspecifico: "3-Incrementar el uso de energías renovables en xxxx", tipoIndicador: "Acción", nombre: "Proyectos de energía renovable", entidadResponsable: "Entidad 18", ultimoPeriodoReportado: "Agosto 2023" },
      { id: 19, eje: "3-Eje uno", objetivoEspecifico: "1-Desarrollar infraestructura de xxxx", tipoIndicador: "Resultado impacto", idIndicador: 1, nombre: "Infraestructura desarrollada", entidadResponsable: "Entidad 19", ultimoPeriodoReportado: "Agosto 2023" },
      { id: 20, eje: "3-Eje uno", objetivoEspecifico: "2-Mejorar la calidad del servicio de xxxx", accionEstreategica: "Pendiente por definir", tipoIndicador: "Resultado producto", idIndicador: 2, nombre: "Calidad de servicio mejorada", entidadResponsable: "Entidad 20", ultimoPeriodoReportado: "Julio 2023" },
      { id: 21, eje: "3-Eje uno", objetivoEspecifico: "3-Aumentar la capacidad de xxxx", tipoIndicador: "Acción", nombre: "Capacidad incrementada", entidadResponsable: "Entidad 21", ultimoPeriodoReportado: "Julio 2023" },
      { id: 22, eje: "3-Eje dos", objetivoEspecifico: "1-Fortalecer el recurso humano en xxxx", tipoIndicador: "Resultado impacto", idIndicador: 1, nombre: "Recurso humano fortalecido", entidadResponsable: "Entidad 22", ultimoPeriodoReportado: "Junio 2023" },
      { id: 23, eje: "3-Eje dos", objetivoEspecifico: "2-Mejorar la capacitación en xxxx", accionEstreategica: "Pendiente por definir", tipoIndicador: "Resultado producto", idIndicador: 2, nombre: "Capacitación mejorada", entidadResponsable: "Entidad 23", ultimoPeriodoReportado: "Junio 2023" }
    ];

    // Aplicar el filtro
    const filteredData = data.filter(item => {
      for (let key in filter) {
        if (filter[key as IndicadorKey] && item[key as IndicadorKey] !== undefined) {
          if (!item[key as IndicadorKey].toLowerCase().includes(filter[key as IndicadorKey]!.toLowerCase())) {
            return false;
          }
        }
      }
      return true;
    });

    return of(filteredData);
  }

  // Método para obtener los datos simulados
  obtenerEjes(): Observable<any[]> {
    return of([
      { id: 1, name: 'Eje 1' },
      { id: 2, name: 'Eje 2' },
      { id: 3, name: 'Eje 3' },
      { id: 4, name: 'Eje 4' }
    ]);
  }

  obtenerObjetivos(): Observable<any[]> {
    return of([
      { id: 1, descripcion: '1-Estandarizar oferta de xxxx' },
      { id: 2, descripcion: '2-Bajar la oferta de xxxx' },
      { id: 3, descripcion: '3-Subir la oferta de xxxx' },
    ]);
  }

  obtenerTiposIndicadores(): Observable<any[]> {
    return of([
      { id: 1, descripcion: 'Resultado impacto' },
      { id: 2, descripcion: 'Resultado producto' },
      { id: 3, descripcion: 'Acción' },
    ]);
  }

  obtenerEntidadesResponsables(): Observable<any[]> {
    return of([
      { id: 1, descripcion: 'Entidad 1 ' },
      { id: 2, descripcion: 'Entidad 2' },
      { id: 3, descripcion: 'Entidad 3' },
    ]);
  }

}
