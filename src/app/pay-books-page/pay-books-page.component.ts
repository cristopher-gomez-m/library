import {  Component, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { Book } from '../interfaces/book';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-pay-books-page',
  templateUrl: './pay-books-page.component.html',
  styleUrls: ['./pay-books-page.component.css']
})
export class PayBooksPageComponent implements OnInit {
  
  books: Book[] = [];
  child: Book[] = [];
  avent: Book[] = [];
  valueToPay:number=0;
  constructor(private servicioComunicacion:ContadorService,private router: Router) {
    this.books= this.servicioComunicacion.getBooks();
   }

    ngOnInit(): void {
      this.getValue();
    }
    eliminar(id:number){
      this.servicioComunicacion.eliminarLibro(id);
      console.log(id);
      this.books= this.servicioComunicacion.getBooks();
      this.valueToPay=0;
      this.getValue();
      
    }

    getValue(){
      this.books.forEach(book=>{
        this.valueToPay+= book.price;
      });
  
      this.child.forEach(book=>{
        this.valueToPay+= book.price;
      });
  
      this.avent.forEach(book=>{
        this.valueToPay+= book.price;
      });
    }
  };
  


