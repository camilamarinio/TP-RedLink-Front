import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'login' , component: LoginComponent},
  {path: 'ordenDeCompra', loadChildren: () => import('./orden-de-compra/orden-de-compra.module').then(m => m.OrdenDeCompraModule) },
  { path: 'gestionDelVendedor', loadChildren: () => import('./gestion-del-vendedor/gestion-del-vendedor.module').then(m => m.GestionDelVendedorModule) },
  { path: 'gestionDelAdministrador', loadChildren: () => import('./gestion-del-administrador/gestion-del-administrador.module').then(m => m.GestionDelAdministradorModule) },
  { path:'**' , component: LoginComponent}
//falta error 404 si le ingreso cualquier ruta

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
