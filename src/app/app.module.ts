import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { GaleriaComponent } from './galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    AcercadeComponent,
    GaleriaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
