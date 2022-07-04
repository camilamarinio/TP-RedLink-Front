import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad/visibilidad-footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-del-administrador',
  templateUrl: './gestion-del-administrador.component.html',
  styleUrls: ['./gestion-del-administrador.component.css']
})
export class GestionDelAdministradorComponent implements OnInit {

  constructor(
    private visibilidadFooterService: VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService
  ) { }

  ngOnInit(): void {
    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();
  }

}
