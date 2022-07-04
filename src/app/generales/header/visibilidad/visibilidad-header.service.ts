import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadHeaderService {
  private headerEstaVisible: boolean;
  private carritoEstaVisible: boolean;
  @Output() cambioDeVisibilidad : EventEmitter<boolean>;


  constructor() {
    this.cambioDeVisibilidad = new EventEmitter();
    this.headerEstaVisible = false;
    this.carritoEstaVisible = false;
  }

  public hacerVisibleElHeader(){
    this.headerEstaVisible = true;
    this.notificarCambios();
  }

  public ocultarHeader(){
    this.headerEstaVisible = false;
    this.notificarCambios();
  }


  private notificarCambios(){
    this.cambioDeVisibilidad.emit(this.headerEstaVisible);

  }
}
