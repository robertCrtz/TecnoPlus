import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: any[];

  constructor(private datos: DataService) {}

  ngOnInit() {
    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.datos.getLocalCartProducts();
  }

  removeCartProduct(item: any) {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'error',
      title: 'Producto eliminado',
      timer: 750,
      showConfirmButton: false,
    });
    this.datos.eliminarProductoCarrito(item);

    // Recalling
    this.getCartProduct();
  }
}
