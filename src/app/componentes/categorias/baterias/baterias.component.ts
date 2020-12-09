import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baterias',
  templateUrl: './baterias.component.html',
  styleUrls: ['./baterias.component.css']
})
export class BateriasComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  baterias: Productos[] = [
    {
      id: 1,
      titulo: 'Pilas AA Recargables por USB Pack 2 und',
      descripcion: 'Recargable por USB. /Pila recargable AA. /Larga duración. /Ideal para mandos a distancia, teclados etc.',
      precio: 25.48,
      src: '../../assets/pilas.jpg'
    },
    {
      id: 2,
      titulo: 'Gioteck Pack Batería para Xbox One',
      descripcion: 'Compatible con todos los modelos de mandos de XBOX /Capacidad de Batería de 800mAh',
      precio: 15.99,
      src: '../../assets/file.jpg'
    },
    {
      id: 3,
      titulo: 'Remotto Battery Batería Inalámbrica para DualShock 4',
      descripcion:'Ergonómica y ligera /Más de 12 horas extra de juego. /Carga un mando en 90 minutos.',
      precio: 25.69,
      src:'../../assets/remotto.jpg '
    },
  ];

  baterias2: Productos[] = [
    {
      id: 1,
      titulo: 'Ksix Plus Batería Portátil Negra 20000 MAh + Cable Micro-USB',
      descripcion:'Batería de Li-Polímero 20.000 mAh /Tiene una capacidad de 20.000 mAh, para cargar tu smartphone hasta 8 veces.',
      precio: 39.65,
      src: '../../assets/bateria.jpg'
    },
    {
      id: 2,
      titulo: 'Microsoft Xbox Kit Play & Charge Batería Recargable + Cable USB-C',
      descripcion: 'Tipo: Kit de carga modular /Plataforma: Xbox One /Marca compatible: Microsoft /Tecnología de conectividad: Alámbrico',
      precio: 36.52,
      src: '../../assets/usb-c.jpg '
    },
    {
      id: 3,
      titulo: 'Batería para Apple Macbook Air 13" A1369 A1405 A1466 A1377',
      descripcion: 'Compatible: MacBook Air 13" MD760, MacBook Air 13" MD760CH/A, MacBook Air "Core i7" (Mid-2013)',
      precio: 45.99,
      src: '../../assets/bateria-para-apple-macbook-ai.jpg'
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
