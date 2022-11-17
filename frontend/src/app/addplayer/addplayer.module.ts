import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddplayerPageRoutingModule } from './addplayer-routing.module';

import { AddplayerPage } from './addplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddplayerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddplayerPage]
})
export class AddplayerPageModule {}
