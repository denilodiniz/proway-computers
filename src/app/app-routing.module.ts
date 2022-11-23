import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  { path: 'carrinho', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
