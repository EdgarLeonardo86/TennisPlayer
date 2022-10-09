import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 // myWelcome: string = "el puto";

  constructor(private router: Router) {}

  gotoTenists() {
    this.router.navigateByUrl("/tenista-list");
  }

}