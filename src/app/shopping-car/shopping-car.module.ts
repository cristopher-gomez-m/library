import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayBooksPageComponent } from '../pay-books-page/pay-books-page.component';
import { PriceCardComponent } from '../price-card/price-card.component';


@NgModule({
  declarations: [
  PayBooksPageComponent,
  PriceCardComponent,
],
  imports: [
    CommonModule,
  ],
})
export class ShoppingCarModule { }
