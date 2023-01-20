import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  correoUsuario :string='';
  private enviarMensajeSubject = new Subject<string>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  constructor() { }

  enviarMensaje(mensaje:string){
    this.correoUsuario=mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
}
