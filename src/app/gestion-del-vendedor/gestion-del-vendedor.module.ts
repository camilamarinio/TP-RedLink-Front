import { SubheaderComponent } from './subheader-inicio/subheader.component';
import { ElementosCompratidosModule } from './../elementos-compratidos/elementos-compratidos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDelVendedorRoutingModule } from './gestion-del-vendedor-routing.module';
import { GestionDelVendedorComponent } from './gestion-del-vendedor.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { CrearProductoComponent } from './producto-router/crear-producto/crear-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductoRouterComponent } from './producto-router/producto-router.component';
import { ProductosComponent } from './productos/productos.component';




@NgModule({
  declarations: [
    GestionDelVendedorComponent,
    SubheaderComponent,
    ProveedoresComponent,
    OrdenesComponent,
    CrearProductoComponent,
    ListadoProductosComponent,
    ProductoRouterComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    GestionDelVendedorRoutingModule,
    ElementosCompratidosModule
  ],
  exports: [


    CrearProductoComponent,
      ListadoProductosComponent,
      ProductosComponent
  ]
})
export class GestionDelVendedorModule { }
