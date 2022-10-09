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

  updateTennisPlayer() {
    const {id, ...tenista} = this.tennisform;
    this.tennisplayerService.updateTennist(id,tenista).subscribe(response => {
      this.modalController.dismiss(1, 'confirm');
    }, error=> {
      alert("Error a la hora de actualizar");
    });
  }

}
