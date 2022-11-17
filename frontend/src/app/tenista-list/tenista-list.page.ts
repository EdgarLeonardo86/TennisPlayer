import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, ToastController } from '@ionic/angular';
import { tennisplayer, TennisplayerService } from '../services/tennisplayer.service';

@Component({
  selector: 'app-tenista-list',
  templateUrl: './tenista-list.page.html',
  styleUrls: ['./tenista-list.page.scss'],
})
export class TenistaListPage implements OnInit {


      tennisplayers:  any = [];
      searchedPlayer: any;

  constructor(private tennisplayerService: TennisplayerService, private toastCtrl: ToastController, public alertController: AlertController, private router: Router) { }

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
    this.presentToast('Elemento borrado');
  }, error=> {
    alert("Error a la hora de borrar");
  });
  
  }

 
  gotoTenists() {
    this.router.navigateByUrl("/addplayer");
  }

  gotoUpdateTenists(tennisplayer) {
   this.router.navigate(["/updplayer",tennisplayer]);
  
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500
    
    });

    toast.present();
  }

  //@ViewChild(IonList) ionList: IonList;


  

}
