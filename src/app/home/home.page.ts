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
  perfil = {
    foto: 'https://media.licdn.com/dms/image/v2/C4D03AQHd3RNtjU8iRQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1561488372851?e=2147483647&v=beta&t=77b3mwMXc1ppGisXLE3rCKFYzNGBfqwdBuRsY5EOLJM',
    nome: 'Agatha Cristie Gonçalves',
    profissao: 'Analista de Dados',
    instagram: '@goncalvesagatha',
    idioma: 'Português/Inglês',
    cidade: 'Tatuí/SP',
    inicio: 'desde outubro/2017'
  }
  biografia = 'Bodybuilder nas horas vagas'

  metrica = {
    curtidas: '46,5k',
    seguindo: '0',
    seguidores: '10k'
  }

  postagens = [
    {
    foto: 'https://dolomite-daisy-5e8.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F22c43cfe-95dc-421e-b687-7e0af7e72ecc%2F8731ff37-5780-44b0-afad-52a46742ef43%2F3.jpg?table=block&id=9ac9d9d8-8b91-442c-8cc6-3ad7a24bc9f6&spaceId=22c43cfe-95dc-421e-b687-7e0af7e72ecc&width=250&userId=&cache=v2',
    nome: 'Gabriele',
    instagram: 'Gaby',
    mensagem: 'Se um carro com adesivo guiado por Deus bater, de quem é a culpa?',
  },
  {
    foto: 'https://dolomite-daisy-5e8.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F22c43cfe-95dc-421e-b687-7e0af7e72ecc%2F8731ff37-5780-44b0-afad-52a46742ef43%2F3.jpg?table=block&id=9ac9d9d8-8b91-442c-8cc6-3ad7a24bc9f6&spaceId=22c43cfe-95dc-421e-b687-7e0af7e72ecc&width=250&userId=&cache=v2',
    nome: 'Gabriele',
    instagram: 'Gaby',
    mensagem: 'Galera! Se dois irmãos gêmeos se casam com duas irmãs gêmeas, os filhos vão ser iguais???',
  },
  {
    foto: 'https://dolomite-daisy-5e8.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F22c43cfe-95dc-421e-b687-7e0af7e72ecc%2F8731ff37-5780-44b0-afad-52a46742ef43%2F3.jpg?table=block&id=9ac9d9d8-8b91-442c-8cc6-3ad7a24bc9f6&spaceId=22c43cfe-95dc-421e-b687-7e0af7e72ecc&width=250&userId=&cache=v2',
    nome: 'Gabriele',
    instagram: 'Gaby',
    mensagem: 'Como fala o problema é seu na língua da sua região??',
  }
]
  }
