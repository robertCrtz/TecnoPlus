import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  redes: Productos[] = [
    {
      id: 1,
      titulo: 'Asus RT-AC86U Router Gaming AC2900 compatible AiMesh',
      descripcion: 'Estándar de red: IEEE 802.11a, IEEE 802.11b, IEEE 802.11g, IEEE 802.11n, IEEE 802.11ac, IPv4, IPv6 /Procesador: CPU de dos núcleos a 1,8 GHz',
      precio: 178.99,
      src: '../../assets/router1.jpg'
    },
    {
      id: 2,
      titulo: 'Asus RT-N12E Router/Punto de Acceso/Repetidor WiFi N300',
      descripcion: 'Estándar de red: IEEE 802.11b, IEEE 802.11g, IEEE 802.11n, IPv4, IPv6 /Segmento de producto: N300 trabajo en red completo; 300 Mbps',
      precio: 22.41,
      src: '../../assets/router2.jpg'
    },
    {
      id: 3,
      titulo: 'Asus RT-AX56U Router AX1800 WiFi 6 Dual Band MU-MIMO/OFDMA',
      descripcion:'CoberturaHogares grandes /Estándar de red IEEE 802.11a, IEEE 802.11b, IEEE 802.11g, IEEE 802.11n, IEEE 802.11ac, IEEE 802.11ax, IPv4, IPv6',
      precio: 182.89,
      src:'../../assets/router3.jpg '
    },
  ];

  redes2: Productos[] = [
    {
      id: 1,
      titulo: 'NGS iHub 3.0 Hub USB 4 Puertos',
      descripcion:'Puertos e Interfaces:Cantidad de puertos: 4, nterfaz de host: USB 3.0 (3.1 Gen 1) Type-A, Interfaces de concentradores: USB 3.0 (3.1 Gen 1) Type-A',
      precio: 18.02,
      src: '../../assets/hub.jpg'
    },
    {
      id: 2,
      titulo: 'TP-Link TL-SG105E Easy Smart Switch 5 Puertos',
      descripcion: 'Interfaces:5 puertos RJ45 10/100/1000Mbps, /protocolos: IEEE 802.3, IEEE 802.3u',
      precio: 26.63,
      src: '../../assets/switch1.jpg '
    },
    {
      id: 3,
      titulo: 'Xtorm USB Power Hub Cube Pro Black Edition',
      descripcion: 'Dimensiones 7.9x7.9x2.8cm Color Negro /Peso 250 gramos Embalaje Embalaje al por menor /Salida 4 x USB 5V / 2,4A (36W)',
      precio: 30.27,
      src: '../../assets/powerztorm.jpg'
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
