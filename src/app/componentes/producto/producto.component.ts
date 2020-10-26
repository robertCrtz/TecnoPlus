import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { isNullOrUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  closeResult = '';
  productoForm: FormGroup;
  idFirabaseActualizar: string;

  constructor(public fb: FormBuilder,
              private datos: DataService) { }

  config: any;
  collection = { count: 0, data: [] };

  ngOnInit(): void {
    this.idFirabaseActualizar = '';

    // inicializando formulario para guardar los productos
    this.productoForm = this.fb.group({
      titulo: ['', Validators.required],
      precio: ['', Validators.required],
      tipo: ['', Validators.required],
    });

    // cargando todos los productos de firebase
    this.datos.getProducto().subscribe(resp => {
      this.collection.data = resp.map((e: any) => {
        return {
          titulo: e.payload.doc.data().titulo,
          precio: e.payload.doc.data().precio,
          tipo: e.payload.doc.data().tipo,
          idFirebase: e.payload.doc.id
        }
      })
    },
      error => {
        console.error(error);
      }
    );
  }

  eliminar(item: any): void {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'error',
      title: 'Producto eliminado',
      timer: 750,
      showConfirmButton: false,
    });
    this.datos.deleteProducto(item.idFirebase);
  }

  guardarProducto(): void {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'success',
      title: 'Producto agregado',
      timer: 750,
      showConfirmButton: false,
    });
    this.datos.createProducto(this.productoForm.value).then(resp => {
      this.productoForm.reset();
    }).catch(error => {
      Swal.fire({
        title: 'Error al guardar',
        icon: 'error',
        text: error.error.message,
        allowOutsideClick: false
      });
    })
  }

}
