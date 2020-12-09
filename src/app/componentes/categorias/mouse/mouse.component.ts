import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  mouse: Productos[] = [
    {
      id: 1,
      titulo: 'MSI Clutch GM50 Ratón Gaming 7200 DPI',
      descripcion: 'Sensor de juego óptico PMW-3330 /Diseño ergonómico ligero /Elija entre millones de colores con Gaming Center /Ajusta la configuración detallada con Gaming Center',
      precio: 75.65,
      src: '../../assets/msi.jpg'
    },
    {
      id: 2,
      titulo: 'Logitech G203 Lightsync 2nd Gen Ratón Gaming 8000DPI RGB Negro',
      descripcion: 'Altura: 116,6 mm /Anchura: 62,15 mm /Iluminación RGB LIGHTSYNC /6 botones programables /Resolución: 200 – 8.000 dpi /Longitud del cable: 2,1 m',
      precio: 35.99,
      src: '../../assets/logitech.jpg'
    },
    {
      id: 3,
      titulo: 'Logitech MX Master 3 Ratón Inalámbrico Avanzado 4000DPI Grafito',
      descripcion:'Tecnología de sensor /Alta precisión Darkfield /Valor nominal: 1000 dpi /dpi (valores mínimo y máximo): 200 a 4.000 dpi (ajustable en incrementos de 50 dpi)',
      precio: 99.99,
      src:'../../assets/high.jpg '
    },
  ];

  mouse2: Productos[] = [
    {
      id: 1,
      titulo: 'Logitech G305 LightSpeed Ratón Inalámbrico Gaming 12000DPI Negro',
      descripcion:'Sensor: HERO™ /Resolución: 200 – 12.000 dpi /Sin suavizado/aceleración/filtros /Aceleración máxima: > 40 G1 /Velocidad máxima: > 400 ips1',
      precio: 64.99,
      src: '../../assets/lgmouse.jpg'
    },
    {
      id: 2,
      titulo: 'Razer Basilisk X Hyperspeed Ratón Gaming 16000DPI Negro',
      descripcion: 'Sensor óptico avanzado Razer 5G con 16000 PPP reales /Inalámbrico dual (2,4 G y BLE) /Seis botones programables de forma independiente',
      precio: 75.52,
      src: '../../assets/00.jpg '
    },
    {
      id: 3,
      titulo: 'Mars Gaming MMAX Ratón Gaming RGB 12400DPI Blanco',
      descripcion: 'Tecnología de detección de movimientos: Óptico /Tipo de botones: Botones presionados /Resolución de movimiento: 12400 DPIs',
      precio: 55.65,
      src: '../../assets/mars-gaming.jpg'
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