import { Component, OnInit, ViewChild } from '@angular/core';
import { TennisplayerService } from '../services/tennisplayer.service';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { UpdatemodalComponent } from './updatemodal/updatemodal.component';



@Component({
  selector: 'app-tenista-list',
  templateUrl: './tenista-list.page.html',
  styleUrls: ['./tenista-list.page.scss'],
})
export class TenistaListPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

      tennisplayers:  any = [];

      tennisplayer =  {
        name: "",
        age: "",
        titles: "",
        ranking: ""
      }
    
      tennisplayerupdate =  {
        id: "",
        name: "",
        age: "",
        titles: "",
        ranking: ""
      }

  constructor(private tennisplayerService: TennisplayerService, private modalController: ModalController) { }

  ngOnInit() {
    this.getAllTennisPlayers();
  }

  getAllTennisPlayers() {
    this.tennisplayerService.getTennisPlayers().subscribe(response => {
      this.tennisplayers = response;
    });
  }

  deleteTenists(id) {
  this.tennisplayerService.deleteTennist(id).subscribe(response => {
    this.getAllTennisPlayers();
  }, error=> {
    alert("Error a la hora de borrar");
  });
  
  }

  async openModal(tenista) {
    const modal = await this.modalController.create({
      component: UpdatemodalComponent,
      componentProps : {
        tennisplayerupdate : tenista
    }});
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {

    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  addTennisPlayer() {
    this.tennisplayerService.addTennisPlayer(this.tennisplayer).subscribe(response => {
      this.getAllTennisPlayers();
      this.modal.dismiss(null, 'confirm');
  }, error=> {
    alert("Error a la hora de añadir");
  });
  }



}
