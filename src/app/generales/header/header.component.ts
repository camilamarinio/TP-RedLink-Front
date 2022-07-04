import { VisibilidadHeaderService } from './visibilidad/visibilidad-header.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit {
  estaVisible: boolean;

  constructor(
    private visibilidadServer : VisibilidadHeaderService
  ) {
    this.estaVisible = false;
  }

  ngOnInit(): void {
    this.visibilidadServer.cambioDeVisibilidad.subscribe((visible : boolean) => {
      this.estaVisible = visible;
    });



  }

}
