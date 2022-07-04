import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderAdminComponent } from './subheader-admin.component';

describe('SubheaderAdminComponent', () => {
  let component: SubheaderAdminComponent;
  let fixture: ComponentFixture<SubheaderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubheaderAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubheaderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
