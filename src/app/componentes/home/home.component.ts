import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Productos } from '../../models/producto.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,
              public auth: AuthService,
              public datos: DataService) { }

  product: Productos;

  destacados: Productos[] = [
    {id: 1, titulo: 'BatGirl',  descripcion: '', precio: 250,  src: '../../assets/3090.png'},
    {id: 2, titulo: 'Intel Core™ i9-10900K 3.70Ghz Avengers Edition',  descripcion: '',   precio: 54,   src: '../../assets/avenger.png '},
    {id: 3, titulo: 'Asus ROG Strix G17 G712LV-H7077 Intel Core i7',  descripcion: 'SSD/RTX 2060/17.3"',  precio: 365,  src: '../../assets/asus.png'},
    ];

  promociones: Productos[] = [
    {id: 4, titulo: 'Superman',  descripcion: '', precio: 250,  precioAntes: 354,  src: '../../assets/MSI MAG.png'},
    {id: 5, titulo: 'Batman',    descripcion: '',   precio: 54,   precioAntes: 250,  src: '../../assets/baracuda.png'},
    {id: 6, titulo: 'BatGirl',   descripcion: '',  precio: 365,  precioAntes: 550,  src: '../../assets/case.png'},
  ];

  populares: Productos[] = [
    {id: 7, titulo: 'BatGirl', descripcion: '', precio: 250,  src: '../../assets/3090.png'},
    {id: 8, titulo: 'Intel Core™ i9-10900K 3.70Ghz Avengers Edition', descripcion: '',   precio: 54,   src: '../../assets/avenger.png '},
    {id: 9, titulo: 'Asus ROG Strix G17 G712LV-H7077 Intel Core i7-10750H/32GB/1TB', descripcion: ' SSD/RTX 2060/17.3"',  precio: 365,  src: '../../assets/asus.png'},
  ];

  ngOnInit() {
  }

  addToCart(item): void {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'success',
      title: 'Producto agregado al carrito',
      timer: 750,
      showConfirmButton: false,
    });
    const a: Productos[] = JSON.parse(localStorage.getItem('productos')) || [];
    a.push(item);

    setTimeout(() => {
      localStorage.setItem('productos', JSON.stringify(a));
    }, 500);
  }

}
