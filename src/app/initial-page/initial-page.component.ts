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
    this.recibirDatos();
    this.recibirChild();
    this.recibirAvent();
  }
  @Input() name:String="";
  constructor(private bookFinder:BookFinderService,private router: Router) { }
  books : Book[]= [];

  child : Book[]= [];
  avent : Book[]= [];
  
  onNameChange() {
    console.log(this.name);
}

recibirDatos=async()=>{
  const dataget ={
    transaccion: "CONSULTA_GENERAL"
  };
   this.bookFinder.getData(dataget).subscribe(
    (response) => {
      this.books = Object.values(response) as Book[];
    }
  );
}

recibirChild=async()=>{
  const dataget ={
    categoria: {
      id: 1005
    },
    transaccion: "CONSULTAR_LIBRO_CATEGORIA"
  };
   this.bookFinder.getData(dataget).subscribe(
    (response) => {
      this.child = Object.values(response) as Book[];
    }
  );
}

recibirAvent=async()=>{
  const dataget ={
    categoria: {
      id: 1006
    },
    transaccion: "CONSULTAR_LIBRO_CATEGORIA"
  };
   this.bookFinder.getData(dataget).subscribe(
    (response) => {
      this.avent = Object.values(response) as Book[];
    }
  );
}
  
}
