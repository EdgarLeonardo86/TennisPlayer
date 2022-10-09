import { Component, OnInit } from '@angular/core';
import { TennisplayerService } from '../services/tennisplayer.service';

@Component({
  selector: 'app-tenista-list',
  templateUrl: './tenista-list.page.html',
  styleUrls: ['./tenista-list.page.scss'],
})
export class TenistaListPage implements OnInit {

 /* tenistas: any = [

    {
      nombre: "Rafa Nadal",
      titulos: "83",
      edad: "36",
      puesto: "3"
    },
    
    {
      nombre: "Carlos Alcaraz",
      titulos: "5",
      edad: "19",
      puesto: "1"
    },

    {
      nombre: "Novak Djokovic",
      titulos: "74",
      edad: "34",
      puesto: "8"
    },
    
      ]*/

      tennisplayers:  any = [];

  constructor(private tennisplayerService: TennisplayerService) { }

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

}
