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
  },
  {
    path: 'addplayer',
    loadChildren: () => import('./addplayer/addplayer.module').then( m => m.AddplayerPageModule)
  },
  {
    path: 'updateplayer',
    loadChildren: () => import('./updateplayer/updateplayer.module').then( m => m.UpdateplayerPageModule)
  },
  {
    path: 'updplayer',
    loadChildren: () => import('./updplayer/updplayer.module').then( m => m.UpdplayerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
