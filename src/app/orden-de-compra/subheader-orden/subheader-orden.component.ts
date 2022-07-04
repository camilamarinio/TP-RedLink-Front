import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subheader-orden',
  templateUrl: './subheader-orden.component.html',
  styleUrls: ['./subheader-orden.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheaderOrdenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
