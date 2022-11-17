import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdplayerPageRoutingModule } from './updplayer-routing.module';

import { UpdplayerPage } from './updplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdplayerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdplayerPage]
})
export class UpdplayerPageModule {}
