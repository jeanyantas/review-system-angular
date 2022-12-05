import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Agregar
import { AppComponent } from './app.component';

// IMPORTAR MODULOS
import { Modulo1Module } from './modulo1/modulo1.module'; // Módulo barra de navegación
import { Modulo2Module } from './modulo2/modulo2.module'; // Módulo Home
import { Modulo3Module } from './modulo3/modulo3.module'; // Módulo Contacto
import { Modulo4Module } from './modulo4/modulo4.module'; // Módulo Usuarios (Carga de JSON)
import { Modulo5Module } from './modulo5/modulo5.module'; // Módulo Footer

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Agregar
    Modulo1Module,    // Agregar
    Modulo2Module,    // Agregar
    Modulo3Module,    // Agregar
    Modulo4Module,    // Agregar
    Modulo5Module     // Agregar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
