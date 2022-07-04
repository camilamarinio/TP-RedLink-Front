import { ApiService } from './../../generales/api.service';
import { VisibilidadHeaderService } from './../../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../../generales/footer/visibilidad/visibilidad-footer.service';
import { ProductoService } from './../../gestion-del-vendedor/producto-router/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from '../../gestion-del-vendedor/producto-router/Producto';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CarritoComponent implements OnInit {
  carrito:Producto[] = [];
  displayedColumns: string[] = ['nombre','precio', 'stock' , 'acciones'];
  dataSource!: MatTableDataSource<Producto>;
  constructor(
    private productoService: ProductoService,
    private visibilidadFooterService: VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService,
    private apiProductos: ApiService
  ) { }



  cargarCarrito(){
    this.carrito = this.productoService.getCarrito();
    /*this.apiProductos.getCarrito().subscribe((producto:any)=>{
      this.carrito = producto._links.productos;
      console.log(this.carrito);
    });*/
    this.dataSource = new MatTableDataSource(this.carrito);
  }

  eliminarProductoCarrito(id: number){
    this.productoService.eliminarProductoCarrito(id);
    this.cargarCarrito();
  }


  ngOnInit(): void {
    this.cargarCarrito();
    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();

  }

}
