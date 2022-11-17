import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TennisplayerService } from '../services/tennisplayer.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-updplayer',
  templateUrl: './updplayer.page.html',
  styleUrls: ['./updplayer.page.scss'],
})
export class UpdplayerPage implements OnInit {

  tennisplayer: any [];
  id: any;
 

  playerForm: FormGroup = new FormGroup({
        name: new FormControl(""),
        titles: new FormControl(""),
        age: new FormControl(""),
        ranking: new FormControl("")
      });

  constructor(private tennisplayerService: TennisplayerService, private router: Router,  private zone: NgZone, public form : FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      const player = this.activatedRoute.snapshot.params;
      this.id = player.id;
       
        this.playerForm= this.form.group({
          name: [player.name],
          titles: [player.titles],
          age: [player.age],
          ranking: [player.ranking]
        })
      }

        onSubmit() {
  if (!this.playerForm.valid) {
    return false;
  } else {
    this.tennisplayerService.updatePlayer(this.id, this.playerForm.value)
      .subscribe(() => {
        this.zone.run(() => {
          this.playerForm.reset();
          this.router.navigate(['/tenista-list']);
        })
      });
  }
  }
}
