import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Productos } from '../models/producto.models';


@Injectable()

export class DataService{
  DatosCollection: AngularFirestoreCollection<Productos>;
  products: AngularFireList<Productos>;
  product: Observable<Productos[]>;
  collection = {
    count: 0,
    data: []
  };

  constructor(private firestore: AngularFirestore) {
    this.DatosCollection = this.firestore.collection<Productos>('productos');
    this.product = this.DatosCollection.snapshotChanges().pipe(
      map(actions => actions.map(e => {
          return {
            titulo: e.payload.doc.data().titulo,
            precio: e.payload.doc.data().precio,
            tipo: e.payload.doc.data().tipo,
            descripcion: e.payload.doc.data().descripcion,
            idFirebase: e.payload.doc.id
          }
        }))
    );
  }


  // Metodo para listar todos los productos
  getProducto(){
    return this.firestore.collection('productos').snapshotChanges();
  }

  /**
   * crea un producto en firebase
   * @param producto producto a crear
   */
  createProducto(producto: Productos){
    return this.firestore.collection('productos').add(producto);
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
