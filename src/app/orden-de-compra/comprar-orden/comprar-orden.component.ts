import { ProductoService } from './../../gestion-del-vendedor/producto-router/producto.service';
import { Producto } from './../../gestion-del-vendedor/producto-router/Producto';
import { VisibilidadHeaderService } from './../../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../../generales/footer/visibilidad/visibilidad-footer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './comprar-orden.component.html',
  styleUrls: ['./comprar-orden.component.css']
})
export class ComprarOrdenComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private visibilidadFooterService: VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService,
    private productoService: ProductoService
  ) {
  }
  cargarProductos(){
    this.productos = this.productoService.getCarrito()
  }





  ngOnInit(): void {
    this.cargarProductos();
    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();
  }

}
