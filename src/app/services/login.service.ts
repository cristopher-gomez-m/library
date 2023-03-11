import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',        
      'Access-Control-Allow-Origin': '*'
    })
  }
  correoUsuario :string='';
  private enviarMensajeSubject = new Subject<string>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();
  constructor(private http: HttpClient) { }
  getData(data: any){
    const dataJson = JSON.stringify(data);
    return this.http.post(environment.apiClienteUrl, dataJson,this.httpOptions);
  }

  enviarMensaje(mensaje:string){
    this.correoUsuario=mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
}
