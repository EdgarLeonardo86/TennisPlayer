import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TennisplayerService } from 'src/app/services/tennisplayer.service';

@Component({
  selector: 'app-updatemodal',
  templateUrl: './updatemodal.component.html',
  styleUrls: ['./updatemodal.component.scss'],
})
export class UpdatemodalComponent implements OnInit {

  tennisplayerupdate;
  tennisform;

  constructor(private tennisplayerService: TennisplayerService, private modalController : ModalController) { }

  ngOnInit() {
   this.tennisform = {
      ...this.tennisplayerupdate
    }
  }

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }


}
