import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenistaListPageRoutingModule } from './tenista-list-routing.module';

import { TenistaListPage } from './tenista-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenistaListPageRoutingModule
  ],
  declarations: [TenistaListPage]
})
export class TenistaListPageModule {}
