import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms'; // IMPORTAR FORMULARIO TEMPLATE



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule // IMPORTAR FORMULARIO TEMPLATE
  ],
  exports:[HomeComponent] // EXPORTAR EL COMPONENTE HOME DEL MODULO2
})
export class Modulo2Module { }
