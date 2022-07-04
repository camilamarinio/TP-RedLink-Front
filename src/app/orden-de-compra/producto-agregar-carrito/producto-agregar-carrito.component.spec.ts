import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAgregarCarritoComponent } from './producto-agregar-carrito.component';

describe('ProductoAgregarCarritoComponent', () => {
  let component: ProductoAgregarCarritoComponent;
  let fixture: ComponentFixture<ProductoAgregarCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoAgregarCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoAgregarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
