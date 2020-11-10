import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Productos } from '../models/producto.models';
import { FileI } from '../models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable()

export class DataService{
  DatosCollection: AngularFirestoreCollection<Productos>;
  products: AngularFireList<Productos>;
  product: Observable<Productos[]>;
  collection = {
    count: 0,
    data: []
  };

  constructor(private firestore: AngularFirestore,
              private storage: AngularFireStorage) {
    this.DatosCollection = this.firestore.collection<Productos>('productos');
  }

  public getAllProductos(): Observable<Productos[]> {
    return this.DatosCollection.snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(e => {
          const data = e.payload.doc.data() as Productos;
          const id = e.payload.doc.id;
          return { id, ...data };
      }))
    );
  }

  getProducto(){
    return this.firestore.collection('productos').snapshotChanges();
  }

  createProducto(product: Productos){
    return this.firestore.collection('productos').add(product);
  }

  /**
   * borrar un producto existente en firebase
   * @param id id de la coleccion en firebase
   */
  deleteProducto(id: any){
    return this.firestore.collection('productos').doc(id).delete();
  }


  // -------- Agregar producto al carrito --------------
  addToCart(product: Productos): void {
    const a: Productos[] = JSON.parse(localStorage.getItem('productos')) || [];
    a.push(product);

    setTimeout(() => {
      localStorage.setItem('productos', JSON.stringify(a));
    }, 500);
  }

  // Fetching Local CartsProducts
  getLocalCartProducts(): Productos[] {
    const products: Productos[] = JSON.parse(localStorage.getItem('productos')) || [];
    return products;
  }

  eliminarProductoCarrito(product: Productos) {
    const products: Productos[] = JSON.parse(localStorage.getItem('productos'));

    for (let i = 0; i < products.length; i++) {
      if (products[i].titulo === product.titulo) {
        products.splice(i, 1);
        break;
      }
    }
    // Actualizando los productos despues de la eliminación
    localStorage.setItem('productos', JSON.stringify(products));
  }

}
