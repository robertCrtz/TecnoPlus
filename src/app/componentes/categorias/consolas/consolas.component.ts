import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  constructor() { }
  product: Productos;

  consolas: Productos[] = [
    {id: 1, titulo: 'BatGirl',  descripcion: '', precio: 250,  src: '../../assets/3090.png'},
    {id: 2, titulo: 'Intel Core™ i9-10900K 3.70Ghz Avengers Edition',  descripcion: '',   precio: 54,   src: '../../assets/avenger.png '},
    {id: 3, titulo: 'Asus ROG Strix G17 G712LV-H7077 Intel Core i7',  descripcion: 'SSD/RTX 2060/17.3"',  precio: 365,  src: '../../assets/asus.png'},
    ];

    consolas2: Productos[] = [
      {id: 1, titulo: 'PlayStation 5',  descripcion: 'para jugar', precio: 250,  src: '../../assets/3090.png'},
      {id: 2, titulo: 'Intel Core™ i9-10900K 3.70Ghz Avengers Edition',  descripcion: '',   precio: 54,   src: '../../assets/avenger.png '},
      {id: 3, titulo: 'Asus ROG Strix G17 G712LV-H7077 Intel Core i7',  descripcion: 'SSD/RTX 2060/17.3"',  precio: 365,  src: '../../assets/asus.png'},
      ];


  ngOnInit(): void {
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
