import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Datos  {
   datos = {
    nombre: '',
    precio: '',
    tipo: '',
  };

}

@Injectable()

export class DataService{

  constructor(
    private firestore: AngularFirestore
  ) { }

  /**
   * Metodo para listar todos los productos
   */
  getProducto(){
    return this.firestore.collection('productos').snapshotChanges();
  }

  /**
   * crea un producto en firebase
   * @param producto producto a crear
   */
  createProducto(producto: any){
    return this.firestore.collection('productos').add(producto);
  }

  /**
   * borrar un producto existente en firebase
   * @param id id de la coleccion en firebase
   */
  deleteProducto(id: any){
    return this.firestore.collection('productos').doc(id).delete();

  }
}
