import { Component, OnInit } from '@angular/core';
import { UsuarioModels } from '../../models/usuario.models';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModels;
  recordarme = false;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
      this.usuario = new UsuarioModels();
      if (localStorage.getItem('email')){
        this.usuario.email = localStorage.getItem('email');
        this.recordarme = true;
      }
  }

  onLogin(form: NgForm){
    if (form.invalid){
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.auth.login(this.usuario)
    .subscribe(resp => {
      Swal.close();
      if (this.recordarme){
        localStorage.setItem('email', this.usuario.email);
      }
      this.router.navigateByUrl('/home');
      setTimeout(function() {
        for (let i = 0; i <= 1; i++){
          location.reload();
        }
      }, 200);
    }, (err) => {

      Swal.fire({
        title: 'Error al autenticar',
        icon: 'error',
        text: err.error.error.message,
        allowOutsideClick: false
      });
    });
  }

}
