import { ElementosCompratidosModule } from './elementos-compratidos/elementos-compratidos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralesModule } from './generales/generales.module';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionDelAdministradorModule } from './gestion-del-administrador/gestion-del-administrador.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GeneralesModule,
    ElementosCompratidosModule,
    GestionDelAdministradorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LoginComponent,
    HttpClientModule
  ]
})
export class AppModule { }
