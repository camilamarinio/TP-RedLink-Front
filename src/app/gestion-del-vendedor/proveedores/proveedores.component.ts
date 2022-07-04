import { VisibilidadHeaderService } from './../../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../../generales/footer/visibilidad/visibilidad-footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor(
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService
  ) { }

  ngOnInit(): void {
    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();

  }

}
