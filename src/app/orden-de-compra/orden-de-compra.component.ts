import { ApiService } from './../generales/api.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad/visibilidad-footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden-de-compra',
  templateUrl: './orden-de-compra.component.html',
  styleUrls: ['./orden-de-compra.component.css']
})
export class OrdenDeCompraComponent implements OnInit {

  constructor(
    private visibilidadFooterService: VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();

  }

}
