import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segments: string = 'usuarios';

  usuarios = [
    {
    nome: 'Agatha Cristie Gonçalves',
    idade: '32',
    genero: 'Feminino',
    rotinas: [
      {
        dia: 'Segunda-feira',
        treinos: [
          'Cadeira Extensora',
          'Leg-press','Búlgaro',
          'Agachamento',
          'Stiff',
          'Mesa Flexora',
          'Gêmeos'
        ]
      },
      {
        dia: 'Terça-Feira',
        treinos: [
          'Supino Halteres',
          'Peck-Deck',
          'Supino Inclinado',
          'Pulley Tríceps',
          'Tríceps Testa',
        ]
      },
      {
        dia: 'Quarta-feira',
        treinos: [
          'Pulley Costas',
          'Pulley Frente',
          'Remada Baixa',
          'Elevação Lateral',
          'Desenvolvimento',
          'Rosca Direta',
          'Rosca Concentrada'
        ]
      }
    ]
  },
  {
    nome: 'Claudinei Junior',
    idade: '17',
    genero: 'Masculino',
    rotinas: [
      {
        dia: 'Segunda-feira',
        treinos: [
          'Agachamento',
          'Gluteos polia'
        ]
      },
      {
        dia: 'Terça-feira',
        treinos: [
          'Elevação Pélvica',
          'Afundo'
        ]
      }
    ]
  }]

  constructor(){}

  trocar(event: any){
    this.segments = event.detail.value;
}
  
}
  
