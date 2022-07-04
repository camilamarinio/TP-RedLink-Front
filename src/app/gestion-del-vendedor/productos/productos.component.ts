import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../producto-router/producto.service';
import { Producto } from '../producto-router/Producto';

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductosComponent implements OnInit {

  @Input() producto: Producto|null;

  constructor(
   private productoService: ProductoService,
   private _snackBar: MatSnackBar
  ) {
    this.producto=null;
  }

  eliminarProducto(producto: Producto){
   //this.productoService.eliminarProducto(producto.id);
   this.confirmacionProducto();
  }

  confirmacionProducto(){
    this._snackBar.open("Se elimino el producto",'',{
      duration:4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  ngOnInit(): void {
  }

}
