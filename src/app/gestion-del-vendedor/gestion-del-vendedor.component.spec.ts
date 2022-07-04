import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDelVendedorComponent } from './gestion-del-vendedor.component';

describe('GestionDelVendedorComponent', () => {
  let component: GestionDelVendedorComponent;
  let fixture: ComponentFixture<GestionDelVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDelVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDelVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
