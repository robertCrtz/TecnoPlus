import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teclados',
  templateUrl: './teclados.component.html',
  styleUrls: ['./teclados.component.css']
})
export class TecladosComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  teclados: Productos[] = [
    {
      id: 1,
      titulo: 'Ozone Battle Royale Teclado Mecánico Gaming Retroiluminado Switch Red Cherry MX',
      descripcion: 'Teclado: Mecánico con switches Cherry MX (rojo) /Tamaño: 360 x 140 x 38 mm /Longitud del cable: 180±2 cm /Modo Gaming: Sí /Compatible: Windows / Android / Linux / iOS /Teclas: 88',
      precio: 110.99,
      src: '../../assets/ozono.jpg'
    },
    {
      id: 2,
      titulo: 'Woxter Stinger RX 1000 KR Teclado Mecánico Retroiluminado',
      descripcion: 'Teclado mecánico gaming /Teclas multimedia de función: teclas programables, control del brillo y de efectos de luz /Conectividad: USB. Plug & Play. /Corriente de trabajo: DC 5V/<250mA /Peso: 670 gr',
      precio: 64.99,
      src: '../../assets/woxter.jpg'
    },
    {
      id: 3,
      titulo: 'MSI Vigor GK50 Low Profile Teclado Mecánico Gaming Retroiluminado Switches Kailh Low Profile',
      descripcion:'Switches Kailh Low Profile Switches /Interface USB 2.0 /Teclas 104/105/109 teclas (diferentes por idiomas) /Iluminación Luz mística RGB por tecla /Sistema operativo Windows 10 / 8.1 / 8/7',
      precio: 120.00,
      src:'../../assets/dragon.jpg '
    },
  ];

  teclados2: Productos[] = [
    {
      id: 1,
      titulo: 'Razer Huntsman Elite Teclado Mecánico Gaming RGB Switches Optomecánicos',
      descripcion:'Nuevos switches optomecánicos de Razer: ligeros y táctiles. /Barra estabilizadora de teclas para un accionamiento preciso y equilibrado. /Reposamuñecas ergonómico de piel sintética suave.',
      precio: 229.99,
      src: '../../assets/razer.jpg'
    },
    {
      id: 2,
      titulo: 'Logitech G915 TKL RGB Teclado Mecánico Gaming Inalámbrico GL Táctil',
      descripcion: 'Especificaciones físicas: Longitud: 368 mm, Anchura: 150 mm, Altura: 22 mm, Longitud del cable: 1,8 m /Especificaciones técnicas: Interruptores GL Táctil, Interruptores de teclas Logitech GL Táctil de perfil bajo',
      precio: 250.15,
      src: '../../assets/gl.jpg '
    },
    {
      id: 3,
      titulo: 'Corsair K63 Teclado Mecánico LED Rojo Cherry MX Red',
      descripcion: 'Dimensiones de teclado (Ancho x Profundidad x Altura): 365 x 171 x 41 mm /Peso del teclado: 1,12 kg /Alimentación: USB /Interfaz del dispositivo: USB /Uso recomendado: Juego',
      precio: 99.99,
      src: '../../assets/corsai.jpg'
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
