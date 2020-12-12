import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { UsuarioModels } from '../../models/usuario.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  estaLogueado = false;
  nombre: string;

  constructor(private auth: AuthService,
              private router: Router,
              public datos: DataService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  salir(){
    for (let i = 0; i < 1; i++){
      location.reload();
    }
    this.auth.logout();
  }

  getCurrentUser(){
    if (this.auth.estaAutenticado()) {
      this.estaLogueado = true;
    } else {
      this.estaLogueado = false;
    }
  }
}
