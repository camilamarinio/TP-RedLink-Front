import { ElementosCompratidosModule } from './../elementos-compratidos/elementos-compratidos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDelAdministradorRoutingModule } from './gestion-del-administrador-routing.module';
import { GestionDelAdministradorComponent } from './gestion-del-administrador.component';
import { PromocionComponent } from './promocion/promocion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SubheaderAdminComponent } from './subheader-admin/subheader-admin.component';


@NgModule({
  declarations: [
    GestionDelAdministradorComponent,
    PromocionComponent,
    UsuariosComponent,
    SubheaderAdminComponent
  ],
  imports: [
    CommonModule,
    GestionDelAdministradorRoutingModule,
    ElementosCompratidosModule
  ],
  exports: [
    PromocionComponent,
    UsuariosComponent
  ]
})
export class GestionDelAdministradorModule { }
