import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  gotoAddPlayer(){
    this.router.navigateByUrl("/addplayer");
  }

  gotoHome(){
    this.router.navigateByUrl("/home");
  }
}
