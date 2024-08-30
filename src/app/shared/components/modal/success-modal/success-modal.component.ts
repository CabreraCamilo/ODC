import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from '@shared/interface/alert.interface';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {
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