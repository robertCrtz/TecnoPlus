import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ensamblaje',
  templateUrl: './ensamblaje.component.html',
  styles: [
  ]
})
export class EnsamblajeComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private auth: AuthService) { }

PCform: FormGroup;
procesadores = [
  {title: 'SSD 156 gb', price: 234},
  {title: 'fdf celeron', price: 456},
  {title: 'SSD sata 234gb', price: 478},
  {title: 'Intel fdf', price: 96}
];
motherboards = [
  {title: 'SSD 156 gb', price: 234},
  {title: 'fdf celeron', price: 456},
  {title: 'SSD sata 234gb', price: 478},
  {title: 'Intel fdf', price: 96}
];
RAMs = [
  {title: 'SSD 156 gb', price: 234},
  {title: 'fdf celeron', price: 456},
  {title: 'SSD sata 234gb', price: 478},
  {title: 'Intel fdf', price: 96}
];
HDD = [
  {title: 'SSD 156 gb', price: 234},
  {title: 'fdf celeron', price: 456},
  {title: 'SSD sata 234gb', price: 478},
  {title: 'Intel fdf', price: 96}
];
SSD = [
  {title: 'SSD 156 gb', price: 234},
  {title: 'fdf celeron', price: 456},
  {title: 'SSD sata 234gb', price: 478},
  {title: 'Intel fdf', price: 96}
];
GPU = [
  {title: 'SSD 156 gb', price: 234},
  {title: 'fdf celeron', price: 456},
  {title: 'SSD sata 234gb', price: 478},
  {title: 'NVIDIA 3090', price: 296}
];

ngOnInit() {
  this.PCform = this.fb.group({
    PlacaControl: ['AMD']
  });
}

  accederCompra(){
    if (this.auth.estaAutenticado()) {
      this.router.navigateByUrl('/compra');
    } else {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        title: 'Debes iniciar sesión',
        timer: 3000,
        showConfirmButton: true,
      });
      this.router.navigateByUrl('/login');
  }

  }
}
