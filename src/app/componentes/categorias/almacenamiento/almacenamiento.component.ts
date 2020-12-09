import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-almacenamiento',
  templateUrl: './almacenamiento.component.html',
  styleUrls: ['./almacenamiento.component.css']
})
export class AlmacenamientoComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  almacenamiento: Productos[] = [
    {
      id: 1,
      titulo: 'Nfortec Alcyon X 256GB SSD M.2 NVMe',
      descripcion: 'MODELO ALCYON X M.2 NVMe  SSD 512GB /FACTOR DE FORMA M.2 2280 /VELOCIDAD DE LECTURA 3400 MB/s /VELOCIDAD DE ESCRITURA 1950 MB/s',
      precio: 99.99,
      src: '../../assets/ssd-m2-nvme.jpg'
    },
    {
      id: 2,
      titulo: 'Samsung 860 EVO Basic SSD 1TB SATA3',
      descripcion: 'Capacidad: 1TB /Interfaz: SATA 6Gb / s (compatible con SATA 3Gb / sy SATA 1.5Gb / s) /NAND Tipo: Samsung V-NAND 3bit MLC',
      precio: 135.99,
      src: '../../assets/evo860-5.jpg'
    },
    {
      id: 3,
      titulo: 'Kingston A400 SSD',
      descripcion:'Disco de estado sólido, capacidad: 240 GB /Velocidad de lectura: 500 MB/s /Velocidad de escritura: 350 MB/s /Componente para: PC/ordenador portátil',
      precio: 44.99,
      src:'../../assets/1282720.jpg '
    },
  ];

  almacenamiento2: Productos[] = [
    {
      id: 1,
      titulo: 'Samsung 870 QVO SSD',
      descripcion:'Factor de forma de disco SSD: 2.5" /SDD, capacidad: 1000 GB /Velocidad de lectura: 560 MB/s /Velocidad de escritura: 530 MB/s',
      precio: 145.99,
      src: '../../assets/1157-samsung-870.jpg'
    },
    {
      id: 2,
      titulo: 'Team Group EX2 SSD 2.5" 512GB',
      descripcion: 'Interfaz SATA Rev. 3.0 (6Gb/s) compatibility to SATA Rev. 2.0 /Read: Up to 550MB/s Max Write: 520MB/s',
      precio: 79.99,
      src: '../../assets/team-group-ex2-ssd-.jpg '
    },
    {
      id: 3,
      titulo: 'WD Red SA500 NAS 4TB SSD 2.5',
      descripcion: 'Velocidad de transferencia de datos: 6 Gbit/s /Velocidad de lectura: 530 MB/s /Velocidad de escritura: 560 MB/s',
      precio: 650.45,
      src: '../../assets/wd-red-sa500.jpg'
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
