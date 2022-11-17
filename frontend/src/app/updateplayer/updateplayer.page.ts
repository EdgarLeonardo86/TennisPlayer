import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TennisplayerService } from '../services/tennisplayer.service';

@Component({
  selector: 'app-updateplayer',
  templateUrl: './updateplayer.page.html',
  styleUrls: ['./updateplayer.page.scss'],
})
export class UpdateplayerPage  {

// tennisplayer: any [];
//   /*playerForm: FormGroup = new FormGroup({
//     name: new FormControl(""),
//     titles: new FormControl(""),
//     age: new FormControl(""),
//     ranking: new FormControl("")
//   });*/

//   playerForm: FormGroup;
//   id: any;

//   constructor(private tennisplayerService: TennisplayerService, private router: Router,  private zone: NgZone, public form : FormBuilder, private activatedRoute: ActivatedRoute) { }


//  /* ionViewDidEnter() {
//     this.tennisplayerService.getTennisPlayers().subscribe((response) => {
//       this.tennisplayer = response;
//     })
//   }*/
  
//   ngOnInit() {
//     this.fetchUser(this.id);
//     this.playerForm= this.form.group({
//       name: [''],
//       titles: [''],
//       age: [''],
//       ranking: ['']
//     })
//   }

//   fetchUser(id) {
//     this.tennisplayerService.getTennisPlayer(id).subscribe((data) => {
//       this.playerForm.setValue({
//        name: data['name'],
//         titles: data['titles'],
//         age: data['age'],
//         ranking: data['ranking']
//       });
//     });
//   }

//   onSubmit() {
//   if (!this.playerForm.valid) {
//     return false;
//   } else {
//     this.tennisplayerService.updatePlayer(this.id, this.playerForm.value)
//       .subscribe(() => {
//         this.zone.run(() => {
//           this.playerForm.reset();
//           this.router.navigate(['/tenista-list']);
//         })
//       });
//   }
//   }
}
