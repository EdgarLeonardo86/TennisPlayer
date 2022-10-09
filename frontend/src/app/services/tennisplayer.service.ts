import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TennisplayerService {

  endpoint = 'http://localhost:8080/api/tennisplayers/';

  constructor(private httpClient: HttpClient) { }

  getTennisPlayers() {
    return this.httpClient.get(this.endpoint);
  }

  deleteTennist(id) {
    return this.httpClient.delete(this.endpoint + id);
  }

  updateTennist(id) {
    //return this.httpClient.update(this.endpoint + id);
  }

 addTennisPlayer(tenista) {
   return this.httpClient.post(this.endpoint,tenista);
  }

}
