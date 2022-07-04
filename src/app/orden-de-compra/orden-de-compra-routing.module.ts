import { ComprarOrdenComponent } from './comprar-orden/comprar-orden.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosClienteComponent } from './productos-cliente/productos-cliente.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenDeCompraComponent } from './orden-de-compra.component';

const routes: Routes = [
  {path: '', component: OrdenDeCompraComponent},
  {path: 'productosCliente', component: ProductosClienteComponent},
  {path: 'carrito' , component: CarritoComponent},
  {path: 'comprarOrden' , component: ComprarOrdenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenDeCompraRoutingModule { }
