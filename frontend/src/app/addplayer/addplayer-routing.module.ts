import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddplayerPage } from './addplayer.page';

const routes: Routes = [
  {
    path: '',
    component: AddplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddplayerPageRoutingModule {}
