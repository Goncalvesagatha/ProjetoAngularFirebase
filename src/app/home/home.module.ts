import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { BannerModule } from '../shared/banner/banner.module';
import { GaleryModule } from '../shared/galery/galery.module';
import { FooterModule } from '../shared/footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    BannerModule,
    GaleryModule,
    FooterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
