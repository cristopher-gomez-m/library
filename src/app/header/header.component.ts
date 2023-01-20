import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  correoUsuario: string = '';
  constructor(
    private servicioComunicacion: LoginService,
    private dialog: MatDialog,
    private router: Router
  ) {}
  openDialogSesion() {
    this.dialog.open(LoginComponent);
  }
  unlogin() {
    this.correoUsuario = '';
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.servicioComunicacion.enviarMensajeObservable.subscribe((response) => {
      this.correoUsuario = response;
    });
  }
}
