import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../interfaces/book';
import { BookFinderService } from '../services/book-finder.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css'],
})
export class InitialPageComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.books);
    console.log(this.child);
    console.log(this.avent);
  }
  @Input() name:String="";
  constructor(private bookFinder:BookFinderService,private router: Router) { }
  books : Book[]= this.bookFinder.getBooks();
  child : Book[]= this.bookFinder.getChild();
  avent : Book[]= this.bookFinder.getAvent();
  onNameChange() {
    console.log(this.name);
}

submit(){
  console.log("funciona");
  this.bookFinder.filterBooks(this.name);
  console.log(this.bookFinder.filteredBooks);
}
  
}
