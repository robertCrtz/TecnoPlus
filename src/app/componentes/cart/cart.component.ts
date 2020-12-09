import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges  } from '@angular/core';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';
import { Productos } from '../../models/producto.models';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { isRegExp } from 'util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(private datos: DataService,
              private auth: AuthService,
              private router: Router) {}

  cartProducts: Productos[];
  public total: number;
  
  ngOnInit() {
    this.getCartProduct();
    this.total = this.getTotal();
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

  accederCompra(){
    if (this.auth.estaAutenticado()) {
      this.router.navigateByUrl('/compra');
    } else {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        title: 'Debes iniciar sesión',
        timer: 3000,
        showConfirmButton: true,
      });
      this.router.navigateByUrl('/login');
  }
}

  getTotal() {
    return this.cartProducts.reduce((total, producto: Productos) => { return total + producto.precio; }, 0); 
  }

}
