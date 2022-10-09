import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtennisplayerPageRoutingModule } from './addtennisplayer-routing.module';

import { AddtennisplayerPage } from './addtennisplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtennisplayerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddtennisplayerPage]
})
export class AddtennisplayerPageModule {}
