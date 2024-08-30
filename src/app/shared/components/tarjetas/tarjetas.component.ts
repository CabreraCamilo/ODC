import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {


  @Input() gestionComponte: any;
  @Output() tarjetaClick = new EventEmitter<void>();

  data: any[] = [];

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
    //gestionComponte.tipo = 1 = PUBLICACIONES
    //gestionComponte.tipo = 2 = PUBLICACIONES
    //gestionComponte.tipo = 3 = SEPARADOR

  }
  ngAfterViewInit(): void {
    if (this.gestionComponte.id != null && this.gestionComponte.preSelect) {
      const anchorElement = document.getElementById(this.gestionComponte.id);
      if (anchorElement) {
        //.renderer.selectRootElement(anchorElement).click();
      }
    }
  }

  compartir(event: MouseEvent) {
    event.stopPropagation(); // Evita que el clic se propague al enlace
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  }

  onClick() {
    this.tarjetaClick.emit();
  }

}
