import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
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
  product: AngularFireObject<Datos>;

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


  // -------- Agregar producto al carrito --------------
  // Adding new Product to cart db if logged in else localStorage
  addToCart(producto: any): void {
    const a: Datos[] = JSON.parse(localStorage.getItem('productos')) || [];
    a.push(producto);

    setTimeout(() => {
      localStorage.setItem('productos', JSON.stringify(a));
    }, 500);
  }

  // Fetching Locat CartsProducts
  getLocalCartProducts(): Datos[] {
    const products: Datos[] = JSON.parse(localStorage.getItem('productos')) || [];

    return products;
  }

  eliminarProductoCarrito(product: any) {
    const products: CollectionReference[] = JSON.parse(localStorage.getItem('productos'));

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        products.splice(i, 1);
        break;
      }
    }
    // Actualizando los productos despues de la eliminación
    localStorage.setItem('productos', JSON.stringify(products));
  }
}
