import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tenista-list',
    loadChildren: () => import('./tenista-list/tenista-list.module').then( m => m.TenistaListPageModule)
  },  {
    path: 'addtennisplayer',
    loadChildren: () => import('./addtennisplayer/addtennisplayer.module').then( m => m.AddtennisplayerPageModule)
  },

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
