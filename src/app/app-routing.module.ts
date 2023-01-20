import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { PayBooksPageComponent } from './pay-books-page/pay-books-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SesionComponent } from './sesion/sesion.component';
import { CatalogolibComponent } from './catalogolib/catalogolib.component';

const routes: Routes = [
  {path:'',component:InitialPageComponent},
  {path:'home',component:InitialPageComponent},
  {path:'sesion',component:SesionComponent},
  {path:'payBooks',component:PayBooksPageComponent},
  {path:'detalles',component:DetallesProductoComponent},
  {path:'search',component:SearchPageComponent},
  {path:'catalogo',component:CatalogolibComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
