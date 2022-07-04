import { VisibilidadHeaderService } from './../../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../../generales/footer/visibilidad/visibilidad-footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  constructor(
    private visibilidadFooterService:VisibilidadFooterService,
    private visibilidadHeaderService: VisibilidadHeaderService
  ) { }

  ngOnInit(): void {
    this.visibilidadFooterService.hacerVisibleElFooter();
    this.visibilidadHeaderService.hacerVisibleElHeader();
  }

}
