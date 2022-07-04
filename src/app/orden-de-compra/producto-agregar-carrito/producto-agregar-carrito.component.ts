import { ApiService } from './../../generales/api.service';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from './../../gestion-del-vendedor/producto-router/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from './../../gestion-del-vendedor/producto-router/Producto';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-agregar-carrito',
  templateUrl: './producto-agregar-carrito.component.html',
  styleUrls: ['./producto-agregar-carrito.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoAgregarCarritoComponent implements OnInit {
  @Input() productoData: any;


  constructor(
  private productoService: ProductoService,
  private _snackBar: MatSnackBar,
  private apiProductos: ApiService
  ) {
  this.productoData=null;

  }

  agregarAlCarrito(producto: Producto){
    this.productoService.agregarAlCarrito(producto);

    this.confirmacionProducto();

  }

  cargarItem(producto: any, cantidad: number){
    const item: any = {
      producto: producto,
      cantidadProductos: cantidad
    }
    this.apiProductos.agregarItem(item).subscribe(respuesta =>
      {
      console.log(respuesta);
    });

    console.log(producto);
    console.log(cantidad);
  }

  confirmacionProducto(){
    this._snackBar.open("Se Agrego un producto al carrito",'',{
      duration:4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }


  ngOnInit(): void {

  }

}
