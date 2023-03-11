import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../interfaces/book';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class BookFinderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',        
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private http: HttpClient) { }
  getData<T>(data: any){
    const dataJson = JSON.stringify(data);
    return this.http.post(environment.apiBookUrl, dataJson,this.httpOptions);
  }
 
  filteredBooks: Book[]=[];
  
  private enviarMensajeSubject = new Subject<Book[]>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  
 

  
  updateFilteredBooks() {
    this.enviarMensajeSubject.next(this.filteredBooks);
  }
 
  getFilteredBooks(){
    return this.filteredBooks;
  }
  
  setFilteredBooks(books: Book[]){
     this.filteredBooks = books;
  }
}
