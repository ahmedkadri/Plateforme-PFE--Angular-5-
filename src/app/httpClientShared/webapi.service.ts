import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { User } from './user';
import { ACCESS_TOKEN } from '../httpClientShared/constants';



let headers = new HttpHeaders()
            .set("Access-Control-Allow-Origin", "*");
headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN));

const httpOptions = {
              headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };


          


@Injectable()
export class WebapiService {

   ACCESS_TOKEN: string = 'accessToken';
  
   lg:boolean ;

   ROOT_URL:string = "http://localhost:8090/user";

  // user2Observal :  Observable<User[]>;
  connacteduser: User ;
  

  constructor(private httpClient: HttpClient) { }
  
  getUsers() {

    return this.httpClient.get(this.ROOT_URL + '/allusers');
  }

   getCurrentUser() {
    return this.httpClient.get(this.ROOT_URL + '/me');
  }


 public postlogin(usermail: string ,password: string): Observable<string>  {

    const response = this.httpClient.post(
      this.ROOT_URL + '/auth',
      {
        "usermail": usermail,
        "password": password
      },{headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }
    );
    return response;
  }

 
  
 public authlogin(usermail: string ,password: string): Observable<string>  {

  const response = this.httpClient.post(
    this.ROOT_URL + '/auth',
    {
      "usermail": usermail,
      "password": password
    },{headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }
  );
  this.lg = true;
  return response;
}
 
public isAuthenticated():boolean {

  return this.lg;
}

}
