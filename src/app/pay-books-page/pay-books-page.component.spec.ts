import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBooksPageComponent } from './pay-books-page.component';

describe('PayBooksPageComponent', () => {
  let component: PayBooksPageComponent;
  let fixture: ComponentFixture<PayBooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayBooksPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
