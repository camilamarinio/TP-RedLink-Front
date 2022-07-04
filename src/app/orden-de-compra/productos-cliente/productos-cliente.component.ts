
import { ApiService } from './../../generales/api.service';
import { ProductoService } from './../../gestion-del-vendedor/producto-router/producto.service';
import { MatPaginator } from '@angular/material/paginator';
import { Producto } from '../../gestion-del-vendedor/producto-router/Producto';
import { MatTableDataSource } from '@angular/material/table';
import { VisibilidadHeaderService } from './../../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../../generales/footer/visibilidad/visibilidad-footer.service';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-productos-cliente',
  templateUrl: './productos-cliente.component.html',
  styleUrls: ['./productos-cliente.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductosClienteComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  productos: Producto[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private visibilidadFooterService: VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService,
    private productoService: ProductoService,
    private apiProductos: ApiService
  ) { }

  cargarProductos(){
    this.apiProductos.getProductos().subscribe((producto:any)=>{
      this.productos = producto._embedded.productoes;
    });
    this.dataSource = new MatTableDataSource(this.productos);

  }

  agregarAlCarrito(producto:Producto){
  this.productoService.agregarAlCarrito(producto);
  this.cargarProductos();
}

  ngOnInit(): void {
    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();
    this.cargarProductos();

  }

  ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
  }
}
