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
  collection = {
    count: 0,
    data: []
  };

  collection2 = {
    count: 0,
    data: []
  };

  collection3 = {
    count: 0,
    data: []
  };

  ngOnInit(): void {
    // cargando todos los productos de firebase
    this.datos.getProductos().subscribe(resp => {
      this.collection.data = resp.map((e: any) => {
        return {
          titulo: e.payload.doc.data().titulo,
          precio: e.payload.doc.data().precio,
          descripcion: e.payload.doc.data().descripcion,
          src: e.payload.doc.data().src,
          idFirebase: e.payload.doc.id
        };
      });
    },
      error => {
        console.error(error);
      }
    );

    // cargando todos los productos de firebase
    this.datos.getProductos2().subscribe(resp => {
      this.collection2.data = resp.map((e: any) => {
        return {
          titulo: e.payload.doc.data().titulo,
          precio: e.payload.doc.data().precio,
          precioAntes: e.payload.doc.data().precioAntes,
          descripcion: e.payload.doc.data().descripcion,
          src: e.payload.doc.data().src,
          idFirebase: e.payload.doc.id
        };
      });
    },
      error => {
        console.error(error);
      }
    );

    // cargando todos los productos de firebase
    this.datos.getProductos3().subscribe(resp => {
      this.collection3.data = resp.map((e: any) => {
        return {
          titulo: e.payload.doc.data().titulo,
          precio: e.payload.doc.data().precio,
          descripcion: e.payload.doc.data().descripcion,
          src: e.payload.doc.data().src,
          idFirebase: e.payload.doc.id
        };
      });
    },
      error => {
        console.error(error);
      }
    );
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
