import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procesadores',
  templateUrl: './procesadores.component.html',
  styleUrls: ['./procesadores.component.css']
})
export class ProcesadoresComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  procesadores: Productos[] = [
    {
      id: 1,
      titulo: 'AMD Ryzen 5 1600 Stepping AF BOX',
      descripcion: '# de núcleos de CPU 6/ # de hilos 12/ Reloj base 3.2GHz/ Reloj de aumento máx. Hasta 3.6GHz /Package AM4 ',
      precio: 178.99,
      src: '../../assets/5-1600.jpg'
    },
    {
      id: 2,
      titulo: 'AMD Ryzen 7 3800X 3.9GHz BOX',
      descripcion: 'Núcleos de CPU: 8/ Hilos: 16/ Velocidad base de reloj: 3.9GHz/ Max Turbo Core Speed: 4.5GHz/ Package: AM4',
      precio: 349.90,
      src: '../../assets/7-3800xt.jpg'
    },
    {
      id: 3,
      titulo: 'AMD Ryzen 9 3900X 3.8 GHz BOX',
      descripcion:'Núcleos de CPU: 12/ Hilos: 24/ Velocidad base de reloj: 3.8GHz/ Max Turbo Core Speed: 4.6GHz/ Package: AM4',
      precio: 469.90,
      src:'../../assets/3900x.jpg '
    },
  ];

  procesadores2: Productos[] = [
    {
      id: 1,
      titulo: 'Intel Core i5-9400F 2.9GHz',
      descripcion:'Frecuencia del procesador: 2.9Ghz /Número de núcleos de procesador: 6/ Socket 1151 /',
      precio: 129.91,
      src: '../../assets/i5-9th.jpg'
    },
    {
      id: 2,
      titulo: 'Intel Core i5-10600K 4.10 GHz',
      descripcion: 'Núcleos de procesador: 6, Número de filamentos de procesador: 12, PBF 4.10 GHz ',
      precio: 302.79,
      src: '../../assets/i5-10600k.jpg '
    },
    {
      id: 3,
      titulo: 'Intel Core i9-9900KF 3.6 GHz',
      descripcion: 'Frecuencia: 3,6 GHz, Núcleos de procesador: 8, Socket: LGA 1151',
      precio: 435.90,
      src: '../../assets/i9-9900k.jpg'
    },
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
