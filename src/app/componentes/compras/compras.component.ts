import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  comprar: FormGroup;
  submitted = false;

  constructor(private router: Router,
              private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comprar = this.FormBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', Validators.required],
      checkbox: ['', Validators.required],
    })
  }

  get f(){
    return this.comprar.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.comprar.invalid) {
      return;
    }

    Swal.fire({
      title: 'Compra realizada con éxito!',
      icon: 'success',
      text: 'Le mantendremos al tanto cuando la entrega llegue a su hogar',
      confirmButtonText: `Regresar a la Pag. Principal`,
      allowOutsideClick: false
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
