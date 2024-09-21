import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './galery.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    GaleryComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ],
  exports:[
    GaleryComponent
  ]
})
export class GaleryModule { }
