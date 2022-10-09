import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserCrudService } from './../services/usercrud.service';

@Component({
  selector: 'app-addtennisplayer',
  templateUrl: './addtennisplayer.page.html',
  styleUrls: ['./addtennisplayer.page.scss'],
})
export class AddtennisplayerPage implements OnInit {

  userForm: FormGroup;
  constructor( private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private userCrudService: UserCrudService) { 
      this.userForm = this.formBuilder.group({
        name: [''],
        age: [''],
        title: [''],
        ranking: ['']
      })
    }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.userCrudService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/tenista-list']);
          })
        });
    }
  }

}
