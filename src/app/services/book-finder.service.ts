import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookFinderService {

  constructor() { }
  books : Book[]= [
    {
      id: 1,
      src: 'https://www.elejandria.com/covers/Don_Quijote_de_la_Mancha-Cervantes_Miguel-lg.png',
      title: 'Don Quijote de la Mancha',
      description:
      `El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano, 
      un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo 
      ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha.`,
      price: 15.90,
    },
    {
      id: 2,
      src: 'https://www.loqueleo.com/do/uploads/2021/08/resized/600_portada-la-odisea.jpg',
      title: 'La Odisea',
      description: `Narra la historia del héroe griego Odiseo, Ulises, el viaje de regreso a su reino de Ítaca donde le esperan su esposa Penélope, rodeada de pretendiente, y su hijo Telémaco.`,
      price: 30.50,
    },
    {
      id: 3,
      src: 'https://covers.alibrate.com/b/59872e8acba2bce50c1a6d96/b0bf30dd-8585-4a46-9229-c72a94282fbe/medium',
      title: 'Cien años de soledad',
      description: `Trata un siglo en la vida de la familia Buendía, cuyo patriarca, José Arcadio Buendía, fundó el pueblo ficticio de Macondo, en Colombia.`,
      price: 32.90,
    },
    {
      id: 4,
      src: 'https://m.media-amazon.com/images/I/51uxZ1EkT4L._SL500_.jpg',
      title: 'Harry Potter y la piedra filosofal',
      description: `En esta primera obra se introducen la mayoría de los personajes principales de la serie, 
      así como muchos de los lugares donde se desarrollará la acción.`,
      price: 20.50,
    },
    {
      id: 5,
      src: 'https://m.media-amazon.com/images/I/51f06+ruiBL._SL500_.jpg',
      title: 'Cuento de Hadas',
      description: `El trasfondo era describir el crecimiento de los niños hasta convertirse en adultos socializados.`,
      price: 35.50,
    },
  ];

  child : Book[]= [
    {
      id: 1,
      src: 'https://quelibroleo.com/images/libros/libro-1536823476.jpg',
      title: 'Matilda',
      description:
      `Matilda es una lectora empedernida con solo cinco años. Sensible e inteligente, todos la admiran menos sus mediocres padres, que la consideran una inútil.`,
      price: 17.90,
    },
    {
      id: 2,
      src: 'http://4.bp.blogspot.com/-25AP7OtVp0A/UEVMS_J8TxI/AAAAAAAABdA/UCeqfsfUweA/s1600/9780141329857.jpg',
      title: 'Charlie y la fábrica de chocolate',
      description: `Narra la historia de Charlie Bucket, un niño rodeado de pobreza extrema, cuyo destino cambia al conocer al excéntrico Willy Wonka, dueño de la fábrica de chocolate cercana a su casa.`,
      price: 34.50,
    },
    {
      id: 3,
      src: 'https://m.media-amazon.com/images/I/51f06+ruiBL._SL500_.jpg',
      title: 'Cuento de Hadas',
      description: `El trasfondo era describir el crecimiento de los niños hasta convertirse en adultos socializados.`,
      price: 35.50,
    }
  ];

  avent : Book[]= [
    {
      id: 1,
      src: 'https://resumen.club/wp-content/uploads/2020/01/la-isla-del-tesoro.jpg',
      title: 'La isla del tesoro',
      description:
      `Narra una aventura de un tiempo lejano, en el que todavía había piratas y tesoros escondidos en islas desiertas. `,
      price: 15.90,
    },
    {
      id: 2,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nyolcvan_nap_alatt_a_F%C3%B6ld_k%C3%B6r%C3%BCl.jpg/220px-Nyolcvan_nap_alatt_a_F%C3%B6ld_k%C3%B6r%C3%BCl.jpg',
      title: 'La vuelta al mundo en ochenta días',
      description: `Las peripecias del británico Phileas Fogg y de su ayudante Jean Passepartout, llamado también "Picaporte" en castellano, constituyen uno de los relatos más cautivadores creados por la imaginación humana y una de las joyas de la literatura.`,
      price: 35.70,
    },
    {
      id: 3,
      src: 'https://m.media-amazon.com/images/I/61CpVTit12L._SL500_.jpg',
      title: 'De la Tierra a la Luna',
      description: `En el Gun Club de Baltimore, tres científicos aficionados preparan el mayor salto intentado nunca por los hombres, sirviéndose de un proyectil, que contiene una cabina para los decimonónicos astronautas, y un gigantesco cañón para dispararlo más allá de la atmósfera.`,
      price: 37.50,
    }
  ];

  filteredBooks: Book[]=[];
  private enviarMensajeSubject = new Subject<Book[]>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  getBooks() {
    return this.books;
  }
  filterBooks(title:String){
    this.filteredBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    this.enviarMensajeSubject.next(this.filteredBooks);
  }

  getChild(){
    return this.child;
  }

  getAvent(){
    return this.avent;
  }
  
  getFilteredBooks(){
    return this.filteredBooks;
  }
}
