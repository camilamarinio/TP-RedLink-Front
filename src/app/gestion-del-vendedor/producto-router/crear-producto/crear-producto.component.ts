import { ProductoService } from './../producto.service';
import { VisibilidadHeaderService } from '../../../generales/header/visibilidad/visibilidad-header.service';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { VisibilidadFooterService } from 'src/app/generales/footer/visibilidad/visibilidad-footer.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrearProductoComponent implements OnInit {
  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
    }


    )
  }

  agregarProducto(){
    const producto : any = {
      nombre: this.form.value.nombre,
      precio: this.form.value.precio,
      stock: this.form.value.stock
    }


    this.productoService.agregarProducto(producto);
    this.confirmacionProducto();
  }

  confirmacionProducto(){
    this._snackBar.open("Elemento agregado",'',{
      duration:4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'

    })
  }

  ngOnInit(): void {

    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();
  }

}
