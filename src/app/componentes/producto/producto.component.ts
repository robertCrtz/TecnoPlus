import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  datos: any = [ {
    nombre: '',
    descripcion: '',
    precio: '',
    tipo: ''
  }
];

  editarDato: any = [ {
    nombre: '',
    descripcion: '',
    precio: '',
    tipo: ''
  }
];

  constructor(private conexion: DataService,
              public auth: AuthService){
                this.conexion.selectedDatos().subscribe(dato => {
                  this.datos = dato;
                  console.log(this.datos);
            });
  }

  ngOnInit(): void {
  }

  Agregar(){
    this.conexion.agregarDatos(this.datos);
    this.datos.nombre = '';
    this.datos.descripcion = '';
    this.datos.precio = '';
    this.datos.tipo = '';
  }

  eliminar(dato){
    this.conexion.eliminarDato(dato);
  }

  editar(dato){
    this.editarDato = dato;
  }

  AgregarDatoEditado(){
    this.conexion.EditarDato(this.editarDato);
  }

}
