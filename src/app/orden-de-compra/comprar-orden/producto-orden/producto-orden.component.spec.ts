import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoOrdenComponent } from './producto-orden.component';

describe('ProductoOrdenComponent', () => {
  let component: ProductoOrdenComponent;
  let fixture: ComponentFixture<ProductoOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
