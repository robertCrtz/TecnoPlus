import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  laptops: Productos[] = [
    {
      id: 1,
      titulo: 'Asus TUF Gaming F15 FX506LH-BQ030 Intel Core i7-10750H',
      descripcion: 'Procesador Intel® Core™ i7-10750H (6 Núcleos, 12 Subprocesos /Memoria RAM 16GB (8GB*2) DDR4 2933MHz /Disco duro 1TB SSD M.2 NVMe™ PCIe® 3.0 /Bluetooth 5.1',
      precio: 1999.99,
      src: '../../assets/aasusjpg.jpg'
    },
    {
      id: 2,
      titulo: 'Acer Nitro 5 AN515-55-598S Intel Core i5-10300H',
      descripcion: 'Procesador Intel® Core™ i5-10300H 2.5 GHz a  4.5 GHz /Memoria 8 GB DDR4 2933MHz Memory /Almacenamiento 256GB SSD PCIe NVMe /Bluetooth 5 /Display 15.6" FHD',
      precio: 1200.75,
      src: '../../assets/nitro.jpg'
    },
    {
      id: 3,
      titulo: 'Lenovo ThinkBook 14 IIL Intel Core i5-1035G1',
      descripcion:'Procesador Intel Core i5-1035G1 (4 núcleos / 8 hilos, frecuencia desde 1.0 GHz hasta 3.6 GHz, 6MB caché) /Memoria RAM 8 GB SO-DIMM DDR4 2666 MHz /Almacenamiento 256 GB SSD ',
      precio: 1140.99,
      src:'../../assets/lenovo.jpg '
    },
  ];

  laptops2: Productos[] = [
    {
      id: 1,
      titulo: 'Asus Zenbook 14 UM431DA-AM003 AMD Ryzen R5 3500U',
      descripcion:'Procesador AMD® Ryzen™ R5 3500U APU (4 Núcleos, 8 Subprocesos, Caché: 2MB Level 2, 2.1GHz hasta 3.7GHz, 64-bit) /Memoria RAM 8GB DDR4 2400MHz /Almacenamiento 512GB SSD M.2',
      precio: 599.99,
      src: '../../assets/ZEN.jpg'
    },
    {
      id: 2,
      titulo: 'Lenovo Yoga 730-13IKB Intel Core i7-8550U',
      descripcion: 'Procesador Intel Core i7-8550U (4C, 1.8 / 4.0GHz, 8MB) /Memoria RAM 8GB DDR4-2400 Soldered /Almacenamiento 512GB SSD M.2 PCIe /Controlador gráfico Integrated Intel UHD Graphics 620',
      precio: 1755.99,
      src: '../../assets/1.jpg '
    },
    {
      id: 3,
      titulo: 'Acer Spin 1 SP111-33 Intel Celeron N4020',
      descripcion: 'Procesador Intel® Celeron® processor N4020 1.10 GHz 4MB /Memoria RAM 4GB /Disco duro 64 GB /Almacenamiento óptico No /Controlador gráfico Intel UHD Graphics 600',
      precio: 349.99,
      src: '../../assets/acer.jpg'
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
