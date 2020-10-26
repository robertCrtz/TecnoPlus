import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  estaLogueado = false;

  constructor(private auth: AuthService,
              private router: Router) { }

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
      console.log(this.estaLogueado);
    } else {
      console.log(this.estaLogueado);
      this.estaLogueado = false;
    }
  }

}
