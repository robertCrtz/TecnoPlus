import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantallas',
  templateUrl: './pantallas.component.html',
  styleUrls: ['./pantallas.component.css']
})
export class PantallasComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  pantallas: Productos[] = [
    {
      id: 1,
      titulo: 'Samsung UE43TU7172 43" LED UltraHD 4K',
      descripcion: 'Diagonal de la pantalla: 109,2 cm (43") /Tipo HD: 4K Ultra HD /Tecnología de visualización: LED /Forma de la pantalla: Plana',
      precio: 411.99,
      src: '../../assets/samsung4k.jpg'
    },
    {
      id: 2,
      titulo: 'Samsung UE55TU7025KXXC 55" Crystal UltraHD 4K HDR10+',
      descripcion: 'Display: Crystal UHD /Resolución 4K /Pulgadas: 55" (138 cm) /Imagen: Procesador Crystal UHD /Audio: Dolby Digital Plus, Salida de sonido 20W',
      precio: 543.80,
      src: '../../assets/Crystal.jpg'
    },
    {
      id: 3,
      titulo: 'Samsung QE50Q60TAU 50" QLED UltraHD 4K',
      descripcion:'Diagonal de la pantalla: 127 cm (50") /Tipo HD: 4K Ultra HD /Tecnología de visualización: QLED /Forma de la pantalla: Plana /3D: No',
      precio: 759.99,
      src:'../../assets/samsung-4k.jpg '
    },
  ];

  pantallas2: Productos[] = [
    {
      id: 1,
      titulo: 'LG 65NANO866NA 65" Nanocell UltraHD',
      descripcion:'Diagonal de la pantalla: 165,1 cm (65") /Tipo HD: 4K Ultra HD /Tecnología de visualización: NanoCell / Forma de la pantalla: Plana ',
      precio: 1090.99,
      src: '../../assets/lg.jpg'
    },
    {
      id: 2,
      titulo: 'LG 55UN74003LB 55" LED UltraHD 4K',
      descripcion: 'Diagonal de la pantalla: 139,7 cm (55") /Tipo HD: 4K Ultra HD /Relación de aspecto nativa: 16:9 /Tecnología de visualización: LED /Tipo de sintonizador: Digital',
      precio: 619.99,
      src: '../../assets/lg2.jpg '
    },
    {
      id: 3,
      titulo: 'LG 55SM9800PLA 55" LED IPS UltraHD 4K Reacondicionado',
      descripcion: 'Diagonal de la pantalla: 139,7 cm (55") /Tipo HD: 4K Ultra HD /Resolución de la pantalla: 3840 x 2160 Pixeles /Forma de la pantalla: Plana',
      precio: 1175.55,
      src: '../../assets/lg3.jpg'
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
