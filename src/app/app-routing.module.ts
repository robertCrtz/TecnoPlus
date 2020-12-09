import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './componentes/cart/cart.component';
import { ComprasComponent } from './componentes/compras/compras.component';
import { ConsolasComponent } from './componentes/categorias/consolas/consolas.component';
import { ProcesadoresComponent } from './componentes/categorias/procesadores/procesadores.component';
import { RedesComponent } from './componentes/categorias/redes/redes.component';
import { PantallasComponent } from './componentes/categorias/pantallas/pantallas.component';
import { TecladosComponent } from './componentes/categorias/teclados/teclados.component';
import { MouseComponent } from './componentes/categorias/mouse/mouse.component';
import { BateriasComponent } from './componentes/categorias/baterias/baterias.component';
import { AlmacenamientoComponent } from './componentes/categorias/almacenamiento/almacenamiento.component';
import { LaptopsComponent } from './componentes/categorias/laptops/laptops.component';
import { AudifonosComponent } from './componentes/categorias/audifonos/audifonos.component';
import { EnsamblajeComponent } from './componentes/categorias/ensamblaje/ensamblaje.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: ''     , redirectTo: 'home', pathMatch: 'full' },
  { path: 'home'     , component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'cart'    , component: CartComponent },
  { path: 'compra'  , component: ComprasComponent, canActivate: [ AuthGuard] },
  { path: 'consolas'  , component: ConsolasComponent },
  { path: 'procesadores'  , component: ProcesadoresComponent },
  { path: 'redes'  , component: RedesComponent },
  { path: 'pantallas'  , component: PantallasComponent },
  { path: 'teclados'  , component: TecladosComponent },
  { path: 'mouse'  , component: MouseComponent },
  { path: 'baterias'  , component: BateriasComponent },
  { path: 'almacenamiento'  , component: AlmacenamientoComponent },
  { path: 'laptops'  , component: LaptopsComponent },
  { path: 'audifonos'  , component: AudifonosComponent },
  { path: 'ensamblaje'  , component: EnsamblajeComponent },
  { path: 'producto', component: ProductoComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
