
import { ElementosCompratidosModule } from './../elementos-compratidos/elementos-compratidos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenDeCompraRoutingModule } from './orden-de-compra-routing.module';
import { OrdenDeCompraComponent } from './orden-de-compra.component';
import { SubheaderOrdenComponent } from './subheader-orden/subheader-orden.component';
import { ProductosClienteComponent } from './productos-cliente/productos-cliente.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductoAgregarCarritoComponent } from './producto-agregar-carrito/producto-agregar-carrito.component';
import { ComprarOrdenComponent } from './comprar-orden/comprar-orden.component';
import { ProductoOrdenComponent } from './comprar-orden/producto-orden/producto-orden.component';



@NgModule({
  declarations: [
    OrdenDeCompraComponent,
    SubheaderOrdenComponent,
    ProductosClienteComponent,
    CarritoComponent,
    ProductoAgregarCarritoComponent,
    ComprarOrdenComponent,
    ProductoOrdenComponent
  ],
  imports: [
    CommonModule,
    OrdenDeCompraRoutingModule,
    ElementosCompratidosModule
  ],
  exports: [

    SubheaderOrdenComponent,
       ProductosClienteComponent,
       CarritoComponent,
       ProductoAgregarCarritoComponent,
       ProductoOrdenComponent
  ]
})
export class OrdenDeCompraModule { }
