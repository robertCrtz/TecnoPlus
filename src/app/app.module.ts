import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';

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
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
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
    EnsamblajeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
