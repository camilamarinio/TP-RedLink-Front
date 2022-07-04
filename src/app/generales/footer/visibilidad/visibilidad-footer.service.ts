import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadFooterService {
  private footerEstaVisible: boolean;
  @Output() cambioDeVisibilidad : EventEmitter<boolean>;

  constructor() {
    this.cambioDeVisibilidad = new EventEmitter();
    this.footerEstaVisible = false;
  }

  public hacerVisibleElFooter(){
    this.footerEstaVisible = true;
    this.notificarCambio();
  }

  public ocultarFooter(){
    this.footerEstaVisible = false;
    this.notificarCambio();
  }

  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.footerEstaVisible);
  }
}
