import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../interfaces/book';
import { BookFinderService } from '../services/book-finder.service';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css'],
})
export class SearchEngineComponent {
  @Input() name: String = '';
  constructor(private bookFinder: BookFinderService, private router: Router) {}

  filteredBooks: Book[]=[];
  onNameChange() {
    console.log(this.name);
  }
 async filterBooks(title:String){
    const dataget ={
      title: title,
      transaccion: "CONSULTAR_LIBRO_NOMBRE"
    };
     this.bookFinder.getData<Book[]>(dataget).subscribe(
      async (response) => {
        this.filteredBooks =  Object.values(response) as Book[];
        this.bookFinder.filteredBooks=  Object.values(response) as Book[];
        console.log(this.bookFinder.filteredBooks);
        this.bookFinder.updateFilteredBooks();
      }
    );
  }
   submit() {
    this.filterBooks(this.name);
    this.name = '';
    this.router.navigateByUrl('/search');
  }
}
