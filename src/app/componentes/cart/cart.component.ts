import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges  } from '@angular/core';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';
import { Productos } from '../../models/producto.models';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {

  constructor(private datos: DataService,
              private auth: AuthService,
              private router: Router) {}

  cartProducts: Productos[];
  totalValue = 0;

  ngOnInit() {
    this.getCartProduct();
  }

  getCartProduct() {
    this.cartProducts = this.datos.getLocalCartProducts();
  }

  removeCartProduct(item: Productos) {
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

  ngOnChanges(changes: SimpleChanges) {
    const dataChanges: SimpleChange = changes.cartProducts;

    const cartProducts: Productos[] = dataChanges.currentValue;
    this.totalValue = 0;
    cartProducts.forEach((item) => {
      this.totalValue += item.precio;
    });
  }

  accederCompra(){
    if (this.auth.estaAutenticado()) {
      this.router.navigateByUrl('/compra');
    } else {
      this.router.navigateByUrl('/login');
  }
}

}
