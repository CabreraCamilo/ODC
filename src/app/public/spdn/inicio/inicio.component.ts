import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  cardsDocumentos: any[] = [];

  data: any[] = [];
  enfoque: any = {};
  principios: any = {};
  politicasPublicas: any = {};
  tarjetaSeleccionada = 0;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.cardsDocumentos = [{
      tipo: 1,
      ruta: "https://www.minjusticia.gov.co/Sala-de-prensa/Documents/Pol%C3%ADtica%20Nacional%20de%20Drogas%202023-2033%20%27Sembrando%20vida,%20desterramos%20el%20narcotr%C3%A1fico%27.pdf",
      titulo: "Política Nacional de Drogas 2023-2033 (ES)",
      contenido: "Colombia ha hecho enormes esfuerzos y sacrificios para responder al fenómeno de las drogas ilegales.",
      autor: "Andres Betancourt",
      year: "2024",
      vistas: 1233,
      tipoPublica: "Documento",
      tematica: "N/A",
      etiqueta: "Psicoactivos",
      imagen: "https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img/imgPUB.jpg",
      alt: "imagen colombia"
    },
    {
      tipo: 1,
      ruta: "https://www.minjusticia.gov.co/programas-co/ODC/Documents/Publicaciones/Politica%20Nacional%20de%20Drogas_English%20Oct%202023.pdf",
      titulo: "Política Nacional de Drogas 2023-2033 (EG)",
      contenido: "Colombia has made significant efforts and sacrifices to address the phenomenon of illegal drugs.",
      autor: "Leonairo Guerrero",
      year: "2024",
      vistas: 500,
      tipoPublica: "Documento",
      tematica: "N/A",
      etiqueta: "Psicoactivos",
      imagen: "https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img/imgPUB.jpg"
    },
    {
      tipo: 1,
      ruta: "https://www.minjusticia.gov.co/programas-co/ODC/Documents/Publicaciones/ABC-PoliticaNacionalDrogas.pdf",
      titulo: "ABC - Política Nacional de Drogas 2023-2033",
      contenido: "Colombia ha hecho enormes esfuerzos y sacrificios para responder al fenómeno de las drogas ilegales.",
      autor: "Andres Betancourt",
      year: "2024",
      vistas: 120,
      tipoPublica: "Documento",
      tematica: "N/A",
      etiqueta: "Psicoactivos",
      imagen: "https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img/imgPUB.jpg",
      alt: "imagen colombia"
    },
    {
      tipo: 1,
      ruta: "https://www.minjusticia.gov.co/programas-co/ODC/Documents/Publicaciones/Resumen.pdf",
      titulo: "Resumne - Política Nacional de Drogas 2023-2033",
      contenido: "Colombia has made significant efforts and sacrifices to address the phenomenon of illegal drugs.",
      autor: "Juan Carlos Torres",
      year: "2024",
      vistas: 23330,
      tipoPublica: "Documento",
      tematica: "N/A",
      etiqueta: "Psicoactivos",
      imagen: "https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img/imgPUB.jpg"
    },



    ];

    this.cardsDocumentos.forEach(a => {
      a.imagen = this.sanitizer.bypassSecurityTrustUrl(a.imagen);
    });

    this.enfoque = { tipo: 3, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/enfoques1.png") };
    this.principios = { tipo: 3, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/Principios1.png") };
    this.politicasPublicas = { tipo: 3, imagen: this.sanitizer.bypassSecurityTrustUrl("https://www.minjusticia.gov.co/programas-co/ODC/Documents/Politica-Drogas/img-/PP.png") };

  }

  escucharTarjeta(valor: any) {
    this.tarjetaSeleccionada = valor;
  }

}
