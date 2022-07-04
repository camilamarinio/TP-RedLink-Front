import { UsuariosComponent } from './usuarios/usuarios.component';
import { PromocionComponent } from './promocion/promocion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDelAdministradorComponent } from './gestion-del-administrador.component';

const routes: Routes = [
  { path: '', component: GestionDelAdministradorComponent },
  { path: 'promociones' , component: PromocionComponent},
  { path: 'usuarios' , component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDelAdministradorRoutingModule { }
