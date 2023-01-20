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
  books: Book[] = this.bookFinder.getBooks();
  child: Book[] = this.bookFinder.getChild();
  avent: Book[] = this.bookFinder.getAvent();
  onNameChange() {
    console.log(this.name);
  }

  submit() {
    this.bookFinder.filterBooks(this.name);
    console.log(this.bookFinder.filteredBooks);
    this.name = '';
    this.router.navigateByUrl('/search');
  }
}
