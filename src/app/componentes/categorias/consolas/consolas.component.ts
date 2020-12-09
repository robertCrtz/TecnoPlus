import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  consolas: Productos[] = [
    {
      id: 1,
      titulo: 'Microsoft Xbox Series X1TB',
      descripcion: 'CPU Zen 2 personaliza de 8 núcleos a 3,8 GHz/Almacenamiento interno. SSD NVME personalizado de 1TB',
      precio: 499.99,
      src: '../../assets/xboxseriesx.jpg'
    },
    {
      id: 2,
      titulo: 'Nintendo New 2DS XL Blanca/Naranja',
      descripcion: 'La consola New Nintendo 2DS XL, con su palanca C y botones ZL/ZR, ofrece opciones de control ampliadas en juegos.',
      precio: 249.99,
      src: '../../assets/nintendo.jpg'
    },
    {
      id: 3,
      titulo: 'Sony PlayStation 5',
      descripcion:'Disco: SSD de 1TB/Unidad óptica: Ultra HD Blu-Ray/CPU:AMD Ryzen con 8 núcleos y 16 subprocesos, y una frecuencia variable de hasta 3,5 GHz.',
      precio: 499.99,
      src:'../../assets/playstation5.jpg '
    },
  ];

  consolas2: Productos[] = [
    {
      id: 1,
      titulo: 'Sony PlayStation 4 Slim 500GB',
      descripcion: 'Disco duro de 500GB/Unidad BD/ DVD/Puerto USB de alta velocidad/(USB 3.0) × 1/Puerto AUX × 1 ',
      precio: 298.99,
      src: '../../assets/playstation4.jpg'
    },
    {
      id: 2,
      titulo: 'Nintendo Switch Azul Neón/Rojo Neón V2',
      descripcion: 'Pantalla: Táctil capacitiva / LCD 6,2 "/ resolución de 1280x720p/ Memoria: 32 GB',
      precio: 329.95,
      src: '../../assets/switch.jpg '
    },
    {
      id: 3,
      titulo: 'Microsoft Xbox One Consola S 1TB',
      descripcion: 'HDR (alto rango dinámico)/ 4K Ultra HD/ 40% más pequeña 1 TB de almacenamiento. Alimentación interna.',
      precio: 298.99,
      src: '../../assets/xboxone.jpg'
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
