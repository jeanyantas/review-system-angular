import { Component, OnInit } from '@angular/core';

import { Resenia } from './models/resenia'; // Importar el modelo Resenia que se creó antes (Dentro del componente)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Se crea un array reseniaArray para guardar todos los objetos que se crean en el formulario del HTML.
  reseniaArray: Resenia[] = [];

  // Crear una variable selectedResenia de tipo clase Resenia como un objeto vacío
  selectedResenia: Resenia = new Resenia();

  // Método DELETE
  eliminar(resenia: Resenia){
    for (let i = 0; i < this.reseniaArray.length; i++){
      if (resenia.id == this.reseniaArray[i].id){
        this.reseniaArray.splice(this.reseniaArray.indexOf(this.reseniaArray[i]), 1);
      }
    }
  }

  addOrEdit(){
    // Crear Reseña
    if(this.selectedResenia.id === 0){ // Si el id de la reseña es 0, según la clase creada y su valor iniciado en 0 significa que no hemos seleccionado ninguna reseña
      this.selectedResenia.id = this.reseniaArray.length + 1; // Asignar un valor al id sumandole 1 a la longitud del array (tabla)
      this.reseniaArray.push(this.selectedResenia); // Agregar el objeto (datos del formulario) al array (tabla)
    }
    // Editar Reseña
    this.selectedResenia = new Resenia(); // Limpiar el formulario
  }

  // Método EDIT
  openForEdit(resenia: Resenia){
    this.selectedResenia = resenia;
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
