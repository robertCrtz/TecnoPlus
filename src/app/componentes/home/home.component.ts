import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Productos } from '../../models/producto.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,
              public auth: AuthService,
              public datos: DataService) { }

  product: Productos;

  destacados: Productos[] = [
    {id: 1, titulo: 'GeForce RTX™ 3090',  descripcion: 'Núcleo gráfico GA102 7 nm (Ampere), 64 núcleos RT, 24 GB de GDDR6X a 19,5 GHz', precio: 1130,  src: '../../assets/3090.png'},
    {id: 2, titulo: 'Intel Core™ i9-10900K Avengers Edition',  descripcion: 'procesador 3,7 GHz, LGA 1200 (Socket H5), 14 NM, 20 MB Smart Cache',   precio: 564,   src: '../../assets/avenger.png '},
    {id: 3, titulo: 'Asus ROG Strix G17 G712LV-H7077',  descripcion: '1TB SSD, RTX 2060, 17.3, Intel Core i7 10750H',  precio: 1899,  src: '../../assets/asus.png'},
    ];

  promociones: Productos[] = [
    {id: 4, titulo: 'MSI MAG B550M MORTAR WIFI ',  descripcion: 'PCIe 4.0, Dos ventiladores de 120mm, Socket AMD-AM4, WIFI integrado', precio: 236.99,  precioAntes: 260,  src: '../../assets/MSI MAG.png'},
    {id: 5, titulo: 'Seagate BarraCuda SSD',    descripcion: '1 TB unidad interna de estado sólido - 2.5 pulgadas SATA 6 Gb/s',   precio: 155,   precioAntes: 170,  src: '../../assets/baracuda.png'},
    {id: 6, titulo: 'ROG Strix Helios',   descripcion: 'RGB mid-tower ATX/EATX con vidrio templado, soporte para radiador 420 mm',  precio: 399,  precioAntes: 410,  src: '../../assets/case.png'},
  ];

  populares: Productos[] = [
    {id: 7, titulo: 'Sony PlayStation 5', descripcion: 'Disco: SSD de 1TB/Unidad óptica: Ultra HD Blu-Ray/CPU:AMD Ryzen con 8 núcleos y 16 subprocesos, y una frecuencia variable de hasta 3,5 GHz.', precio: 499,  src: '../../assets/playstation5.jpg'},
    {id: 8, titulo: 'Acer Spin 1 SP111-33 Intel Celeron', descripcion: 'Procesador Intel® Celeron® N4020 1.10 GHz 4MB /Memoria RAM 4GB /Disco duro 64 GB /GPU Intel UHD Graphics 600',   precio: 349,   src: '../../assets/acer.jpg'},
    {id: 9, titulo: 'Logitech G935 Gaming LightSync 7.1', descripcion: 'Inalámbrico y alámbrico /Conector de 3,5 mm /Conexión USB /Conector USB: MicroUSB /Frecuencia de banda: 2.4 GHz /Alcance inalámbrico: 20 m',  precio: 189,  src: '../../assets/logitech1.jpg'},
  ];

  ngOnInit() {
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
