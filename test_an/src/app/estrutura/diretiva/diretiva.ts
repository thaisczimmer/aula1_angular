import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
 alunos = [
    { id: 1, nome: 'Clara', status: 'ativo' },
    { id: 2, nome: 'Arthur', status: 'inativo' },
    { id: 3, nome: 'Vitoria', status: 'ativo' },
    { id: 4, nome: 'Thiago', status: 'inativo' }
  ];
}
