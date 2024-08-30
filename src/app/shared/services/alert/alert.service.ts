import { Injectable, Type } from '@angular/core';
import {
  NgbModal,
  NgbModalOptions,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from '@shared/interface/alert.interface';

import { AlertModalComponent } from '@shared/components/modal/alert-modal/alert-modal.component';
import { ConfirmationModalComponent } from '@shared/components/modal/confirmation-modal/confirmation-modal.component';
import { NoticeModalComponent } from '@shared/components/modal/notice-modal/notice-modal.component';
import { SuccessModalComponent } from '@shared/components/modal/success-modal/success-modal.component';

/**
 * Mapping of modal types to their corresponding component classes.
 */
type ModalMapping = {
  alert: typeof AlertModalComponent;
  confirmation: typeof ConfirmationModalComponent;
  notice: typeof NoticeModalComponent;
  success: typeof SuccessModalComponent;
};

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private activeModals: NgbModalRef[] = [];

  private readonly modalMapping: ModalMapping = {
    alert: AlertModalComponent,
    confirmation: ConfirmationModalComponent,
    notice: NoticeModalComponent,
    success: SuccessModalComponent,
  };

  private defaultButton = {
    text: 'Cerrar',
    className: 'btn btn-primary btn-modal-govco btn-contorno',
    onClick: () => this.closeAll()
  };

  constructor(private modalService: NgbModal) {}

  /**
   * Gets the component class for the specified modal type.
   *
   * @param type - The modal type to get the component class for.
   * @returns The component class for the specified modal type.
   * @throws {Error} If the specified modal type is invalid.
   */
  private getComponent(type: keyof ModalMapping): Type<any> {
    const component = this.modalMapping[type];

    if (!component) {
      throw new Error(`Invalid modal type: ${type}`);
    }

    return component;
  }

  /**
   * Opens a modal of the specified type with the provided configuration and options.
   *
   * @param type - The type of modal to open.
   * @param config - The configuration for the modal.
   * @param options - Optional modal options to customize the modal behavior.
   * @returns A Promise that resolves when the modal is closed.
   */
  open(
    type: keyof ModalMapping,
    config: ModalConfig,
    options?: NgbModalOptions
  ): Promise<any> {
    const component = this.getComponent(type);

    if (!config.buttons || config.buttons.length === 0) {
      config.buttons = [this.defaultButton];
    }

    const modalRef = this.modalService.open(component, {
      centered: true,
      ...options,
    });
    modalRef.componentInstance.config = config;

    this.activeModals.push(modalRef);

    if (config.beforeClose) {
      modalRef.componentInstance.beforeClose = config.beforeClose;
    }

    modalRef.result.finally(() => {
      this.activeModals = this.activeModals.filter((ref) => ref !== modalRef);
    });

    return modalRef.result;
  }

  /**
   * Opens an alert modal with the provided configuration.
   *
   * @param config - The configuration for the alert modal.
   * @param options - Optional modal options to customize the modal behavior.
   * @returns A Promise that resolves when the modal is closed.
   */
  openAlert(config: ModalConfig, options?: NgbModalOptions): Promise<any> {
    return this.open('alert', { title: 'Alerta', ...config }, options);
  }

  /**
   * Opens a notice modal with the provided configuration.
   *
   * @param config - The configuration for the notice modal.
   * @param options - Optional modal options to customize the modal behavior.
   * @returns A Promise that resolves when the modal is closed.
   */
  openNotice(config: ModalConfig, options?: NgbModalOptions): Promise<any> {
    return this.open('notice', { title: 'Aviso', ...config }, options);
  }

  /**
   * Opens a success modal with the provided configuration.
   *
   * @param config - The configuration for the success modal.
   * @param options - Optional modal options to customize the modal behavior.
   * @returns A Promise that resolves when the modal is closed.
   */
  openSuccess(config: ModalConfig, options?: NgbModalOptions): Promise<any> {
    return this.open('success', { title: 'Éxito', ...config }, options);
  }

  /**
   * Opens a success modal with the provided configuration.
   *
   * @param config - The configuration for the success modal.
   * @param options - Optional modal options to customize the modal behavior.
   * @returns A Promise that resolves when the modal is closed.
   */
  openConfirmation(config: ModalConfig, options?: NgbModalOptions): Promise<any> {
    return this.open('confirmation', { title: 'Éxito', ...config }, options);
  }

  /**
   * Closes all currently open modals.
   */
  closeAll(): void {
    this.activeModals.forEach((modalRef) => modalRef.close());
    this.activeModals = [];
  }
}
