import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateplayerPage } from './updateplayer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateplayerPage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateplayerPageRoutingModule {}
