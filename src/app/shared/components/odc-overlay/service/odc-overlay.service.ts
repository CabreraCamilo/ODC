import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OdcOverlayService {

  private overlaySubject = new BehaviorSubject<boolean>(false);
  overlay$ = this.overlaySubject.asObservable();

  show() {
    this.overlaySubject.next(true);
  }

  hide() {
    this.overlaySubject.next(false);
  }
}
