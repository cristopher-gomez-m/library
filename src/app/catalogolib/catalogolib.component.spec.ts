import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogolibComponent } from './catalogolib.component';

describe('CatalogolibComponent', () => {
  let component: CatalogolibComponent;
  let fixture: ComponentFixture<CatalogolibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogolibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogolibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
