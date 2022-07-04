import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderOrdenComponent } from './subheader-orden.component';

describe('SubheaderOrdenComponent', () => {
  let component: SubheaderOrdenComponent;
  let fixture: ComponentFixture<SubheaderOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubheaderOrdenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubheaderOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
