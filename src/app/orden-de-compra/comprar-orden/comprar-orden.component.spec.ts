import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarOrdenComponent } from './comprar-orden.component';

describe('ComprarOrdenComponent', () => {
  let component: ComprarOrdenComponent;
  let fixture: ComponentFixture<ComprarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
