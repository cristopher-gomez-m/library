import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/book';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent {
  constructor(private servicioComunicacion: ContadorService){}

  @Input() libro!:Book;

  comprar(libro:Book){
    this.servicioComunicacion.añadirLibro(libro);
    console.log(libro)
  }
}
