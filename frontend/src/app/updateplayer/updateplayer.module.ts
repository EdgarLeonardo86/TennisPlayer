import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { UpdateplayerPageRoutingModule } from './updateplayer-routing.module';

import { UpdateplayerPage } from './updateplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,,
    ReactiveFormsModule,
    UpdateplayerPageRoutingModule
  ],
  declarations: [UpdateplayerPage]
})
export class UpdateplayerPageModule {}
