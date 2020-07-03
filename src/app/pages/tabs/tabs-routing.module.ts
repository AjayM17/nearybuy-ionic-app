import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path:'orders',
        loadChildren: () => import('../orders/orders.module').then(m => m.OrdersPageModule)
        // loadChildren:'../../pages/orders/orders.module#OrdersPageModule'
      },
      {
        path:'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
        // loadChildren:'../../pages/products/products.module#ProductsPageModule'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
