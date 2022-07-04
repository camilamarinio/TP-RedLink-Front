import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDelAdministradorComponent } from './gestion-del-administrador.component';

describe('GestionDelAdministradorComponent', () => {
  let component: GestionDelAdministradorComponent;
  let fixture: ComponentFixture<GestionDelAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDelAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDelAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
