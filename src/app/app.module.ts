import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { CardComponent } from './card/card.component';
import { SesionComponent } from './sesion/sesion.component';
import { ShoppingCarModule } from './shopping-car/shopping-car.module';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from "@angular/common/http";
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CardBookComponent } from './card-book/card-book.component';
import { CatalogolibComponent } from './catalogolib/catalogolib.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitialPageComponent,
    CardComponent,
    SesionComponent,
    ShoppingCarComponent,
    LoginComponent,
    DetallesProductoComponent,
    SearchEngineComponent,
    SearchPageComponent,
    FooterComponent,
    CardBookComponent,
    CatalogolibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ShoppingCarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
