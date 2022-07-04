import { Producto } from './Producto';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ProductoService {
   listaProductos: Producto[] = [
   {id: 1,nombre: 'pan' , precio: '100' , stock:'20'},
    {id: 2,nombre: 'agua' , precio: '90' , stock:'50'},
    {id: 3,nombre: 'torta' , precio: '2500' , stock:'10'},
    {id:4,nombre: 'queso' , precio: '1000' , stock:'200'},
    {id:5,nombre: 'leche' , precio: '130' , stock:'50'},
    {id: 6,nombre: 'harina' , precio: '80' , stock:'40'},
    {id: 7,nombre: 'manteca' , precio: '300' , stock:'3'},
    {id: 8,nombre: 'pimienta' , precio: '90' , stock:'5'},
];

   carrito: Producto[] = [/*
    {nombre: 'pimienta' , precio: '90' , stock:'5'},
    {id: 6,nombre: 'harina' , precio: '80' , stock:'40'},
    {id: 7,nombre: 'manteca' , precio: '300' , stock:'3'},
    {id: 8,nombre: 'pimienta' , precio: '90' , stock:'5'}*/

   ];

  constructor() { }

  getProductos(){
    return this.listaProductos.slice();
  }

  getCarrito(){
    return this.carrito.slice();
  }

  agregarProducto(producto: Producto){
    this.listaProductos.unshift(producto);

  }

  agregarAlCarrito(producto: Producto){
    this.carrito.unshift(producto);
  }

  eliminarProducto(id: number){
    this.listaProductos.splice(id,1);
  }

  eliminarProductoCarrito(id: number){
    this.carrito.splice(id,1);

  }
}
