import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Productos } from '../models/producto.models';
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

  constructor(private firestore: AngularFirestore) {
    this.DatosCollection = this.firestore.collection<Productos>('productos');
  }

  // CONSOLAS
  getConsolas(){
    return this.firestore.collection('consolas').snapshotChanges();
  }
  getConsolas2(){
    return this.firestore.collection('consolas2').snapshotChanges();
  }

  //PROCESADORES
  getProcesadores(){
    return this.firestore.collection('procesadores').snapshotChanges();
  }
  getProcesadores2(){
    return this.firestore.collection('procesadores2').snapshotChanges();
  }

  //REDES
  getRedes(){
    return this.firestore.collection('redes').snapshotChanges();
  }
  getRedes2(){
    return this.firestore.collection('redes2').snapshotChanges();
  }
  
  //PANTALLAS
  getPantallas(){
    return this.firestore.collection('pantallas').snapshotChanges();
  }
  getPantallas2(){
    return this.firestore.collection('pantallas2').snapshotChanges();
  }

 //TECLADOS
  getTeclados(){
    return this.firestore.collection('teclados').snapshotChanges();
  }
  getTeclados2(){
    return this.firestore.collection('teclados2').snapshotChanges();
  }
  
  //MOUSES
  getMouses(){
    return this.firestore.collection('mouses').snapshotChanges();
  }
  getMouses2(){
    return this.firestore.collection('mouses2').snapshotChanges();
  }

  //BATERIAS
  getBaterias(){
    return this.firestore.collection('baterias').snapshotChanges();
  }
  getBaterias2(){
    return this.firestore.collection('baterias2').snapshotChanges();
  }

  //STORAGE
  getStorages(){
    return this.firestore.collection('storage').snapshotChanges();
  }
  getStorages2(){
    return this.firestore.collection('storage2').snapshotChanges();
  }
  
  //LAPTOPS
  getLaptops(){
    return this.firestore.collection('laptops').snapshotChanges();
  }
  getLaptops2(){
    return this.firestore.collection('laptops2').snapshotChanges();
  }

  //AUDIFONOS
  getAudifonos(){
    return this.firestore.collection('audifonos').snapshotChanges();
  }
  getAudifonos2(){
    return this.firestore.collection('audifonos2').snapshotChanges();
  }

  //PRODUCTOS
  getProductos(){
    return this.firestore.collection('productos').snapshotChanges();
  }
  getProductos2(){
    return this.firestore.collection('productos2').snapshotChanges();
  }
  getProductos3(){
    return this.firestore.collection('productos3').snapshotChanges();
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
