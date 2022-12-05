import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms'; // Importar Formularios Reactivos



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule // Importar Formulario Reactivo
  ],
  exports:[HomeComponent] // EXPORTAR EL COMPONENTE HOME DEL MODULO2
})
export class Modulo2Module { }
