import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProductoComponent } from './componentes/producto/producto.component';

import { DataService } from './services/data.service';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ProductoComponent,
    CartComponent,
    ComprasComponent,
    ConsolasComponent,
    ProcesadoresComponent,
    RedesComponent,
    PantallasComponent,
    TecladosComponent,
    MouseComponent,
    BateriasComponent,
    AlmacenamientoComponent,
    LaptopsComponent,
    AudifonosComponent,
    EnsamblajeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SharedModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
