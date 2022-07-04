import { VisibilidadFooterService } from './visibilidad/visibilidad-footer.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FooterComponent implements OnInit {
  estaVisible: boolean;

  constructor(
    private visibilidadService : VisibilidadFooterService
  ) {
    this.estaVisible = false;
  }


  ngOnInit(): void {
    this.visibilidadService.cambioDeVisibilidad.subscribe((visible: boolean) => {
      this.estaVisible = visible;
    });
  }
}
