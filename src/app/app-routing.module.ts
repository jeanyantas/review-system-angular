import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modulo2/home/home.component';
import { ContactoComponent } from './modulo3/contacto/contacto.component';
import { UsuariosComponent } from './modulo4/usuarios/usuarios.component';

// CONFIGURACION PARA RUTAS DEL NAVBAR
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'usuarios',component:UsuariosComponent}
];
// FIN CONFIGURACION

@NgModule({
  imports: [RouterModule.forRoot(routes)], // ROUTING
  exports: [RouterModule]
})
export class AppRoutingModule { }
