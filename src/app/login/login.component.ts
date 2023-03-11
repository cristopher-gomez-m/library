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
  error:boolean=false;
   usuarioLogin = new FormGroup({
    usuario: new FormControl('',
    [Validators.required,
    Validators.pattern(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )]), 
    password: new FormControl('', Validators.required)
  })


  onSubmit(){
    this.login(String(this.usuarioLogin.value.usuario),String(this.usuarioLogin.value.password));
  }
 
  cambioTexto(mensaje:string){
    this.servicioComunicacion.enviarMensaje(mensaje);
  }
  close(){
    this.dialogRef.close();
  }

  login=async (usuario:any,password:any)=>{
    const dataget ={
      usuario:usuario,
      password:password,
      transaccion: "CONSULTA_ID"
    };
     this.servicioComunicacion.getData(dataget).subscribe(
      (response) => {
        if(Array.isArray(response) && response.length > 0){
          this.cambioTexto(response[0]);
          console.log(response[0].usuario);
          this.error=false;
          this.dialogRef.close();
        }
        else{
          this.error=true;
        }
      }
    );
  }
}