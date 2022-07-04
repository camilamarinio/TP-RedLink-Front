import { Producto } from './../../../gestion-del-vendedor/producto-router/Producto';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-orden',
  templateUrl: './producto-orden.component.html',
  styleUrls: ['./producto-orden.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoOrdenComponent implements OnInit {
  @Input() producto: Producto|null;

  constructor() {
    this.producto = null;
   }

  ngOnInit(): void {
  }

}
