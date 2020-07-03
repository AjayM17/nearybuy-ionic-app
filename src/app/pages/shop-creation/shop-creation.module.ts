import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopCreationPageRoutingModule } from './shop-creation-routing.module';

import { ShopCreationPage } from './shop-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopCreationPageRoutingModule
  ],
  declarations: [ShopCreationPage]
})
export class ShopCreationPageModule {}
