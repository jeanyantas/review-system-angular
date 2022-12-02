import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// IMPORTAR FORMULARIO TEMPLATE
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// IMPORTAR MODULOS
import { Modulo1Module } from './modulo1/modulo1.module';
import { Modulo2Module } from './modulo2/modulo2.module';
import { Modulo3Module } from './modulo3/modulo3.module';
import { Modulo4Module } from './modulo4/modulo4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule, // FORMULARIO TEMPLATE
    Modulo1Module,
    Modulo2Module,
    Modulo3Module,
    Modulo4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
