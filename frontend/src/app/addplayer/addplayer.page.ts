import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TennisplayerService } from '../services/tennisplayer.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.page.html',
  styleUrls: ['./addplayer.page.scss'],
})
export class AddplayerPage implements OnInit {

playerForm: FormGroup = new FormGroup({
  name: new FormControl(""),
  titles: new FormControl(""),
  age: new FormControl(""),
  ranking: new FormControl("")
});
 

  constructor(private tennisplayerService: TennisplayerService, private router: Router,  private zone: NgZone, public form : FormBuilder) { 

  }

ngOnInit() { }

onSubmit() {
  if (!this.playerForm.valid) {
    return false;
  } else {
    this.tennisplayerService.create(this.playerForm.value)
      .subscribe(() => {
        this.zone.run(() => {
          this.playerForm.reset();
          this.router.navigate(['/tenista-list']);
        })
      });
  }
}
}
  /*
  ngOnInit() {
  }

  onSubmit() {
    if (!this.playerForm.valid) {
      return false;
    } else {
      this.tennisplayerService.create(this.playerForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.playerForm.reset();
            this.router.navigate(['/addplayer']);
          })
        });
    }
  }

  /*async presentToast() {
    const toast = await this.toastController.create({
      message:'Producto creado',
      duration: 2000
    });
    toast.present();
  }*/


