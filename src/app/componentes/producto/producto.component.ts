import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dato } from '../../models/datos.model';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  datos: Dato[];

  constructor(public dataService: DataService,
              public router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.datos = this.dataService.getDatos();
  }

  addDato(nuevoNombre, nuevaDescripcion, nuevoPrecio, nuevoTipo) {
    this.dataService.addDatos({
      nombre: nuevoNombre.value,
      descripcion: nuevaDescripcion.value,
      precio: nuevoPrecio.value,
      tipo: nuevoTipo.value
    });
    nuevoNombre.value = '';
    nuevaDescripcion.value = '';
    nuevoPrecio.value = '';
    nuevoNombre.focus();
    return false;
  }

  deleteDatos(dato: Dato){
    this.dataService.deleteDatos(dato);
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/');
  }

}
