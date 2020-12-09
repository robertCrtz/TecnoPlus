import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audifonos',
  templateUrl: './audifonos.component.html',
  styleUrls: ['./audifonos.component.css']
})
export class AudifonosComponent implements OnInit {

  constructor(private router: Router) { }
  product: Productos;
  mostrar = true;

  audifonos: Productos[] = [
    {
      id: 1,
      titulo: 'MSI Immerse GH50 Auriculares Gaming 7.1',
      descripcion: 'Frecuencia de altavoz 20Hz ~ 20KHz /Conector 2.0 USB /Cable 2.2m con conector dorado /Dimensión del producto (mm) 170 x 80 x 200 mm',
      precio: 99.99,
      src: '../../assets/gh50-side-p-1-mic.jpg'
    },
    {
      id: 2,
      titulo: 'Owlotech Ear Twins Auriculares Inalámbricos Blanco',
      descripcion: 'Bluetooth 5.0 Compatible con todo tipo de smartphones /Distancia de Bluetooth: 10 a 15 metros. /Batería: Auriculares: 2x 55mAh. /Batería: Estuche de carga: 400mAh.',
      precio: 45.95,
      src: '../../assets/photo-1.jpg'
    },
    {
      id: 3,
      titulo: 'Xiaomi Mi Airdots Auriculares Inalámbricos Negro',
      descripcion:'Alcance inalámbrico 10 m /Conectividad del dispositivo Inalámbrico /Alimentación Batería /Carga por USB Si /Cable USB incluido No /Versión de Bluetooth 5.0',
      precio: 35.88,
      src:'../../assets/miar.jpg '
    },
  ];

  audifonos2: Productos[] = [
    {
      id: 1,
      titulo: 'Logitech G935 Auriculares Gaming Inalámbricos LightSync 7.1',
      descripcion:'Tecnología de conectividad: Inalámbrico y alámbrico /Conector de 3,5 mm: Si /Conexión USB: Si /Conector USB: MicroUSB /Frecuencia de banda: 2.4 GHz /Alcance inalámbrico: 20 m',
      precio: 189.99,
      src: '../../assets/logitech1.jpg'
    },
    {
      id: 2,
      titulo: 'Astro Gaming Auriculares Inalámbricos A50 + Estación Base PS4/PC/Mac',
      descripcion: 'Micrófono: 6.0 mm unidireccional, aislamiento de voz /Acoplamiento al oído: sobre el oído /Controladores: imán de neodimio de 40 mm /Inalámbrico: hasta 30 pies',
      precio: 299.99,
      src: '../../assets/a50.jpg '
    },
    {
      id: 3,
      titulo: 'Razer Kraken X Lite Auriculares Gaming 7.1 Multiplataforma',
      descripcion: 'Respuesta de frecuencia: 12 Hz - 28 kHz /Sensibilidad (@ 1 kHz): TBD /Controladores: 40 mm, con imanes de neodimio. /Diámetro interno del audífono: 65 x 44 mm',
      precio: 47.25,
      src: '../../assets/kraken.jpg'
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
