import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ],
  exports:[
    BannerComponent
  ]
})
export class BannerModule { }
