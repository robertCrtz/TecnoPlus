import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './componentes/cart/cart.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'cart'    , component: CartComponent },
  { path: 'producto', component: ProductoComponent, canActivate: [ AuthGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
