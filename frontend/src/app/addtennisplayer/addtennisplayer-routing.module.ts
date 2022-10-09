import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtennisplayerPage } from './addtennisplayer.page';

const routes: Routes = [
  {
    path: '',
    component: AddtennisplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtennisplayerPageRoutingModule {}
