import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  boton: boolean;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
  }

  mostrar(){
    if (localStorage.getItem('token')){
      this.boton = true;
    } else {
      this.boton = false;
    }
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }


}
