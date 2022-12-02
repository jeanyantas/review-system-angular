import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';

// IMPORTAR FORMULARIO TEMPLATE
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule // IMPORTAR FORMULARIO TEMPLATE
  ],
  exports:[ContactoComponent] // EXPORTAR EL COMPONENTE CONTACTO DEL MODULO3
})
export class Modulo3Module { }
