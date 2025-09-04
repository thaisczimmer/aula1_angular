import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
 export class Direiva {
  mostrarMensagem = true;

  toggleMensagem(){
    this.mostrarMensagem = !this.mostrarMensagem
  }
 }