import { ApiService } from './../generales/api.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad/visibilidad-footer.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  loading : boolean;
  usuarios : any[] = [];
  unUsuario: any;


  constructor(
    private fd : FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private visibilidadFooterService: VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService,
    private apiRest: ApiService
  ) {
    this.form = this.fd.group({
      usuario: ['' , Validators.required],
      password: ['' , Validators.required],
    })
    this.loading = false;

  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    this.controlUsuario(usuario);

    //console.log(this.unUsuario);
    if(usuario == this.unUsuario?.nombre && password == this.unUsuario?.contrasenia){
      //al primer intento simpre me tirar error de usuario y contraseña pero en el segundo con los datos
      //correctos funciona e ingresa
      this.mostrarLoading();
    }else{
      //mando error
      this.errorUser();
      this.form.reset();

    }


  }

  errorUser(){
    this._snackBar.open("Usuario o contraseña invalido",'',{
      duration:5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'

    })
  }

  mostrarLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['ordenDeCompra']);

    }, 1500)
  }

  controlUsuario(nombre: string ){
    this.apiRest.unUsuario(nombre).subscribe((usuario:any)=>{
      this.unUsuario = usuario;
      //console.log(this.unUsuario);
    });


  }


  ngOnInit(): void {
    this.visibilidadFooterService.ocultarFooter();
    this.visibilidadHeaderService.ocultarHeader();
    this.apiRest.getUsuarios().subscribe((usuario:any)=>{
      this.usuarios = usuario._embedded.usuarios;
     // console.log(this.usuarios);
    });


  }


}
