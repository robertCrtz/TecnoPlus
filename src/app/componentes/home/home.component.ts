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
  product: Productos[];
  mostrarD = false;
  config: any;
  collection = {
    count: 0,
    data: []
  };

  constructor(public router: Router,
              public auth: AuthService,
              public datos: DataService) { }

  ngOnInit() {
        // cargando todos los productos de firebase
    this.datos.getProducto().subscribe(resp => {
      this.collection.data = resp.map((e: any) => {
        return {
          titulo: e.payload.doc.data().titulo,
          precio: e.payload.doc.data().precio,
          tipo: e.payload.doc.data().tipo,
          descripcion: e.payload.doc.data().descripcion,
          idFirebase: e.payload.doc.id
        }
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
