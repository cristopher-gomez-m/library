import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../services/contador.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent implements OnInit {
  
  //libros:{id:number,src:string,title:string,description:string}[]=[];
  numeroLibros:number=0;
  constructor(private servicioComunicacion: ContadorService,private router: Router){}
  ngOnInit(): void {
    this.servicioComunicacion.enviarMensajeObservable.subscribe(response=>{
      this.numeroLibros=response.length;
     })
  }

  prueba(){
    /*
    let objToSend: NavigationExtras ={
      queryParams:{
        libros: this.libros
      },
      skipLocationChange: false,
      fragment: 'top' 
    }
    console.log(objToSend.queryParams!['libros']);
    this.redirectTo('/payBooks', objToSend);
    */
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigate([uri],{ state: { booksToPay: objToSend}});
  }

}
