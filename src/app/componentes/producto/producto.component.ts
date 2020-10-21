import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { isNullOrUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

    // inicializando formulario para guardar los estudiantes
    this.productoForm = this.fb.group({
      titulo: ['', Validators.required],
      precio: ['', Validators.required],
      tipo: ['', Validators.required],
    });

    // cargando todos los estudiantes de firebase
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
    this.datos.deleteProducto(item.idFirebase);
  }

  guardarProducto(): void {
    this.datos.createProducto(this.productoForm.value).then(resp => {
      this.productoForm.reset();
    }).catch(error => {
      console.error(error)
    })
  }

}
