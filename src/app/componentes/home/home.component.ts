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
  mostrarD = false;

  destacados: Array<any> = [
    {id: 1, titulo: 'BatGirl', precio: '250',  src: '../../assets/3090.png'},
    {id: 2, titulo: 'Intel Core™ i9-10900K 3.70Ghz Avengers Edition',   precio: '54',   src: '../../assets/avenger.png '},
    {id: 3, titulo: 'Asus ROG Strix G17 G712LV-H7077 Intel Core i7-10750H/32GB/1TB SSD/RTX 2060/17.3"',  precio: '365',  src: '../../assets/asus.png'},
    ];

  promociones: Array<any> = [
    {id: 1, titulo: 'Superman', precio: '250',  precioAntes: '354',  src: '../../assets/MSI MAG.png'},
    {id: 2, titulo: 'Batman',   precio: '54',   precioAntes: '250',  src: '../../assets/baracuda.png'},
    {id: 3, titulo: 'BatGirl',  precio: '365',  precioAntes: '550',  src: '../../assets/case.png'},
  ];

  populares: Array<any> = [
    {id: 1, titulo: 'BatGirl', precio: '250',  src: '../../assets/3090.png'},
    {id: 2, titulo: 'Intel Core™ i9-10900K 3.70Ghz Avengers Edition',   precio: '54',   src: '../../assets/avenger.png '},
    {id: 3, titulo: 'Asus ROG Strix G17 G712LV-H7077 Intel Core i7-10750H/32GB/1TB SSD/RTX 2060/17.3"',  precio: '365',  src: '../../assets/asus.png'},
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
    // tslint:disable-next-line: one-variable-per-declaration
    const a: destacados = JSON.parse(localStorage.getItem('productos')) || [];
    a.push(item);
    const b: promociones = JSON.parse(localStorage.getItem('productos')) || [];
    b.push(item);
    const c: populares = JSON.parse(localStorage.getItem('productos')) || [];
    c.push(item);

    setTimeout(() => {
      localStorage.setItem('productos', JSON.stringify(a));
    }, 500);
  }

}
