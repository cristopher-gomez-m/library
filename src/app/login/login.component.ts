import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private servicioComunicacion: LoginService,private dialogRef: MatDialogRef<LoginComponent>) { }
  ngOnInit(){
    this.servicioComunicacion.enviarMensajeObservable.subscribe(response=>{
      this.correoUsuario = response
     })
  };

  correoUsuario:string='';
   usuarioLogin = new FormGroup({
    usuario: new FormControl('',
    [Validators.required,
    Validators.pattern(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )]), 
    password: new FormControl('', Validators.required)
  })


  onSubmit(){
    this.cambioTexto(String(this.usuarioLogin.get('usuario')?.value));
    this.router.navigate(['/cliente']);
    this.dialogRef.close();
  }
 
  cambioTexto(mensaje:string){
    this.servicioComunicacion.enviarMensaje(mensaje);
  }
  close(){
    this.dialogRef.close();
  }
}