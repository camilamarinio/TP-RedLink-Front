import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { CrearProductoComponent } from './producto-router/crear-producto/crear-producto.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDelVendedorComponent } from './gestion-del-vendedor.component';

const routes: Routes = [
  {path: '', component: GestionDelVendedorComponent },
  {path : 'productos' , component: ListadoProductosComponent},
  {path: 'proveedores' , component: ProveedoresComponent},
  {path: 'ordenes' , component: OrdenesComponent},
  {path: 'crearProducto' , component: CrearProductoComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDelVendedorRoutingModule { }
