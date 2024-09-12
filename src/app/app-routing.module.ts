import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoPageModule) },
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule) }  // Rota para cadastro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


