import { Component, Input,OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  constructor(private servicioComunicacion: ContadorService){}
  ngOnInit(): void {
  }
  @Input() libro!:Book;

  comprar(libro:Book){
    this.servicioComunicacion.añadirLibro(libro);
  }
}
