import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent  implements OnInit {

  treinos=[
    {
      titulo:"Braço",
      fotos:[
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"},
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"},
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"}
      ]
    },
    {
      titulo:"Peito",
      fotos:[
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"},
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"},
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"}
      ]
    },
    {
      titulo:"Costas",
      fotos:[
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"},
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"},
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"}
      ]
    },
    {
      titulo:"Pernas",
      fotos:[
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"},
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"},
        {foto:"https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2021/09/23114923/GettyImages-535861527.jpg"}
      ]
    }
  ]

  constructor() { }

  ngOnInit() {}

}
