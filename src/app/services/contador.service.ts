import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Book } from '../interfaces/book';
@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  books:Book[]=[];
  child:Book[]=[];
  avent:Book[]=[];
  private enviarMensajeSubject = new Subject<Book[]>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  constructor() { }

  añadirLibro(libro:Book){
    this.books.push(libro); 
    this.enviarMensajeSubject.next(this.books);

  }

  añadirChild(libro:Book){
    this.child.push(libro);
    this.enviarMensajeSubject.next(this.child);
    console.log(this.child);
  }

  añadirAvent(libro:Book){
    this.avent.push(libro);
    this.enviarMensajeSubject.next(this.avent);
    console.log(this.avent);
  }

  getBooks() {
    return this.books;
  }
  getChild(){
    return this.child;
  }
  getAvent(){
    return this.avent;
  }

  eliminarLibro(id:number){
    this.books.splice(id,1);
    this.enviarMensajeSubject.next(this.books);
  }

  eliminarChild(id:number){
    this.child.splice(id,1);
    this.enviarMensajeSubject.next(this.child);
    console.log(this.child);
  }

  eliminarAvent(id:number){
    this.avent.splice(id,1);
    this.enviarMensajeSubject.next(this.avent);
    console.log(this.avent);
  }

  resetBooks(){
    this.books=[];
    this.enviarMensajeSubject.next(this.books);
  }

  resetChild(){
    this.child=[];
    this.enviarMensajeSubject.next(this.child);
  }

  resetAvent(){
    this.avent=[];
    this.enviarMensajeSubject.next(this.avent);
  }

}
