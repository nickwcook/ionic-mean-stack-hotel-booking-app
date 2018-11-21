import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RoomsProvider {

      constructor(public http: Http) {
        
      }

      getRooms(options) {
            return new Promise(resolve => {
                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');

                  this.http.post('http://localhost:8080/api/rooms', JSON.stringify(options), {headers: headers}).pipe(
                        map(res => res.json())
                  )
                  .subscribe( data => {
                        resolve(data);
                  })
            })
      }

      reserveRoom(data) {
            return new Promise(resolve => {
                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json');

                  this.http.post('http://localhost:8080/api/rooms/reserve', JSON.stringify(data), {headers: headers}).subscribe(data => {
                        resolve(data);
                  })
            })
      }

}
