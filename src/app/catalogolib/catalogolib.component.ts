import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogolib',
  templateUrl: './catalogolib.component.html',
  styleUrls: ['./catalogolib.component.css']
})
export class CatalogolibComponent {
  catalogo: any[] = [
    { Titulo: 'Titulo: Don Quijote de la Mancha', Autor: 'Autor: Miguel de Cervantes', imagen: 'https://www.elejandria.com/covers/Don_Quijote_de_la_Mancha-Cervantes_Miguel-lg.png', Precio: 'Precio: 26 $' },
    { Titulo: 'Titulo: La Odisea ', Autor: 'Autor: Homero ', imagen: 'https://http2.mlstatic.com/D_NQ_NP_659616-MCO46929520455_072021-O.webp', Precio: 'Precio: 15 $' },
    { Titulo: 'Titulo: Cien años de soledad', Autor: 'Autor: Gabriel García Márquez', imagen: 'https://covers.alibrate.com/b/59872e8acba2bce50c1a6d96/b0bf30dd-8585-4a46-9229-c72a94282fbe/medium', Precio: 'Precio: 23 $' },
    { Titulo: 'Mi esposa y yo compramos un rancho', Autor: 'Autor: Harrison Query', imagen: 'https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/367/m_libros/portada_mi-esposa-y-yo-compramos-un-rancho_matt-query_202212011306.jpg', Precio: 'Precio: 45 $' },
    { Titulo: 'Titulo: Volver a empezar (It Starts with Us)', Autor: 'Autor: Colleen Hoover', imagen: 'https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/366/m_libros/portada_volver-a-empezar-it-starts-with-us_colleen-hoover_202212021606.jpg', Precio: 'Precio: 18 $' },
    
  ];
  constructor() { }
  ngOnInit(): void { }

}
