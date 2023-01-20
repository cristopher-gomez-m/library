import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookFinderService } from '../services/book-finder.service';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit{
  constructor(private bookFinder:BookFinderService){}
  books : Book[]= this.bookFinder.getFilteredBooks();

  ngOnInit() {
    this.bookFinder.enviarMensajeObservable.subscribe((response) => {
      this.books = response;
    });
  }
}
