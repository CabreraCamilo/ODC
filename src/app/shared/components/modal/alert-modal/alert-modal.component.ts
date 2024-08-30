import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from '@shared/interface/alert.interface';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent {
  @Input() config!: ModalConfig;

  constructor(public activeModal: NgbActiveModal) { }

  closeModal(): void {
    if (this.config.beforeClose) {
      const result = this.config.beforeClose();
      if (result instanceof Promise) {
        result.then((shouldClose) => {
          if (shouldClose) {
            this.activeModal.close();
          }
        });
      } else if (result) {
        this.activeModal.close();
      }
    } else {
      this.activeModal.close();
    }
  }
}
