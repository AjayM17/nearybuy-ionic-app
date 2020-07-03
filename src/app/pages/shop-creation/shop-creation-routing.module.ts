import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopCreationPage } from './shop-creation.page';

const routes: Routes = [
  {
    path: '',
    component: ShopCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopCreationPageRoutingModule {}
