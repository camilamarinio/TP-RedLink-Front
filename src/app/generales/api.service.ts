import { Observable } from 'rxjs';
import { Producto } from './../gestion-del-vendedor/producto-router/Producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private url: string = environment.apiRestURL;
  constructor(
    private http: HttpClient
  ) { }

  public getProductos():Observable<Producto>{
  return this.http.get<Producto>(this.url + '/productos');
  }

  public getCarrito(){
    return this.http.get(this.url + '/carrito');
  }

  public getUsuarios(){
    return this.http.get(this.url + '/usuarios');
  }

  public unUsuario(nombre: string ){
    return this.http.get(`${this.url + '/usuarios'}/${nombre}/agregar`);
  }
}
