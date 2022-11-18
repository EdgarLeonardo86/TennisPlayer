import { ApplicationInitStatus, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



export class tennisplayer {
  name: string;
  titles: string;
  age: string;
  ranking: string;
 
}
@Injectable({
  providedIn: 'root'
})
export class TennisplayerService {

 

  endpoint = 'http://localhost:8080/api/tennisplayers';

  constructor(private httpClient: HttpClient) { }

  getTennisPlayers() {
    return this.httpClient.get(this.endpoint);
  }

  deleteTennist(id) {
    return this.httpClient.delete(this.endpoint + "/" +  id);
  }

  create(tennisplayer) {
    const payload = {name: tennisplayer.name, titles: tennisplayer.titles, age: tennisplayer.age, ranking: tennisplayer.ranking};
    return this.httpClient.post(this.endpoint,payload,{headers:{"Content-Type": "application/json"}});
  }

  updatePlayer(id, tennisplayer): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(tennisplayer), this.httpOptions)
      .pipe(
        tap(_ => console.log(`player updated: ${id}`)),
        catchError(this.handleError(id))
      );
  }


  getTennisPlayer(id): Observable<tennisplayer[]>{
    return this.httpClient.get<tennisplayer[]>(this.endpoint + '/' + id).pipe(
      tap(_ => console.log(`User fetched: ${id}`)),
      catchError(this.handleError<tennisplayer[]>(`Get player id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
}
