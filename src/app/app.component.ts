import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OdcOverlayService } from '@shared/components/odc-overlay/service/odc-overlay.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'odc-minjusticia';

  isOverlayVisible: Observable<boolean>;

  constructor(private overlayService: OdcOverlayService, private cdr: ChangeDetectorRef) {
    this.isOverlayVisible = this.overlayService.overlay$;
  }

  ngOnInit_(): void {
    this.isOverlayVisible.subscribe(() => {
      // Marca los cambios para ser detectados después del ciclo de cambios
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {
    this.isOverlayVisible.subscribe(() => {
      setTimeout(() => {
        // Deja que Angular actualice la vista después de que el ciclo de cambios actual haya terminado
      }, 0);
    });
  }
}
