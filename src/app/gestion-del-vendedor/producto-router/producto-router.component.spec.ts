import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRouterComponent } from './producto-router.component';

describe('ProductoRouterComponent', () => {
  let component: ProductoRouterComponent;
  let fixture: ComponentFixture<ProductoRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
