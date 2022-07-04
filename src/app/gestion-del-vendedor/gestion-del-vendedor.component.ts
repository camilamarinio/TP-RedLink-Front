import { VisibilidadFooterService } from './../generales/footer/visibilidad/visibilidad-footer.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-del-vendedor',
  templateUrl: './gestion-del-vendedor.component.html',
  styleUrls: ['./gestion-del-vendedor.component.css']
})
export class GestionDelVendedorComponent implements OnInit {

  constructor(
    private visibilidadFooterService: VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService
  ) { }

  ngOnInit(): void {
    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();
  }

}
