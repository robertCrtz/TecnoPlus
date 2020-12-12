import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../models/producto.models';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-procesadores',
  templateUrl: './procesadores.component.html',
  styleUrls: ['./procesadores.component.css']
})
export class ProcesadoresComponent implements OnInit {

  constructor(private datos: DataService,) { }
  product: Productos;
  collection = {
    count: 0,
    data: []
  };

  collection2 = {
    count: 0,
    data: []
  };

  ngOnInit(): void {
    // cargando todos los productos de firebase
    this.datos.getProcesadores().subscribe(resp => {
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
    this.datos.getProcesadores2().subscribe(resp => {
      this.collection2.data = resp.map((e: any) => {
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
