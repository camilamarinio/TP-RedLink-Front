import { ApiService } from './../../generales/api.service';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { ProductoService } from './../producto-router/producto.service';

import { VisibilidadHeaderService } from './../../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../../generales/footer/visibilidad/visibilidad-footer.service';
import { Producto } from '../producto-router/Producto';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ListadoProductosComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 productos: Producto[] = [];

  constructor(
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService,
    private productoService: ProductoService,
    private apiService: ApiService
  ) {

  }

  cargarProductos(){
    this.apiService.getProductos().subscribe((producto:any)=>{
      this.productos = producto._embedded.productoes;
    });
    this.dataSource = new MatTableDataSource(this.productos);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();
    this.cargarProductos();
  }
}
