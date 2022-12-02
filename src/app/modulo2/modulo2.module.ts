import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent] // EXPORTAR EL COMPONENTE HOME DEL MODULO2
})
export class Modulo2Module { }
