import { Component, OnInit } from '@angular/core';

// Se crea la interface para el objeto resenia
interface objetoResenias {
  dniUsuario: string;
  nombreUsuario: string;
  apellidosUsuario: string;
  correoUsuario: string;
  genero: string;
  nombreLibro: string;
  autorLibro: string;
  puntuacionLibro: number;
  comentario: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Se crea un array listaResenias para guardar todos los objetos que se crean en el formulario del HTML.
  listaResenias:any[] = [];

  // Crear el Método de la clase
  enviar(dniUsuarioInput:HTMLInputElement, nombreUsuarioInput:HTMLInputElement,apellidosUsuarioInput:HTMLInputElement, correoUsuarioInput:HTMLInputElement, generoInput:HTMLSelectElement, nombreLibroInput:HTMLInputElement, autorLibroInput:HTMLInputElement, puntuacionLibroInput:HTMLInputElement, comentarioInput:HTMLTextAreaElement){
    
    // Validar que los campos no se encuentren vacíos
    if(dniUsuarioInput.value == '' || nombreUsuarioInput.value == '' || apellidosUsuarioInput.value == '' || correoUsuarioInput.value == '' || generoInput.value == '' || nombreLibroInput.value == '' || autorLibroInput.value == '' || parseInt(puntuacionLibroInput.value) < 1 || comentarioInput.value == ''){
      alert('¡Completar Todos Los Campos!');
    }
    // Capturar los datos del formulario en el objeto resenia
    else{
      const resenia: objetoResenias = {dniUsuario: dniUsuarioInput.value, nombreUsuario: nombreUsuarioInput.value, apellidosUsuario: apellidosUsuarioInput.value, correoUsuario: correoUsuarioInput.value, genero: generoInput.value, nombreLibro: nombreLibroInput.value, autorLibro: autorLibroInput.value, puntuacionLibro: parseInt(puntuacionLibroInput.value), comentario: comentarioInput.value};

      // Agregar el objeto resenia al array listaResenias
      this.listaResenias.push(resenia);

      // Limpiar el formulario después del SUBMIT
      dniUsuarioInput.value = '';
      nombreUsuarioInput.value = '';
      apellidosUsuarioInput.value = '';
      correoUsuarioInput.value = '';
      generoInput.value = '';
      nombreLibroInput.value = '';
      autorLibroInput.value = '';
      puntuacionLibroInput.value = '';
      comentarioInput.value = '';
    }
    return false;
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
