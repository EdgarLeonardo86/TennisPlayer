import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenistaListPage } from './tenista-list.page';

const routes: Routes = [
  {
    path: '',
    component: TenistaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenistaListPageRoutingModule {}
