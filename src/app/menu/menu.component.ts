import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { WebapiService } from '../httpClientShared/webapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../httpClientShared/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ROOT_URL:string = "http://localhost:8090/user";
  public dataus = localStorage.getItem('connecteduser');

  usero: User ;
 
  

  constructor(private appcomp: AppComponent,private httpClient: HttpClient,private webapiservice: WebapiService) { 
   
   console.log(this.dataus); 
  }
  verif: string;
  
  public Users1 ;
  ngOnInit() {

    
  }



 /* getCurrentUser() {
    const req = this.httpClient.get(this.ROOT_URL + '/me')
    .subscribe(
      data => {this.Users1 = data }
    );

    console.log("*--*-*-*-*-*-*-*-");
    console.log(this.Users1);
    return req;
  } */

  /* getroles(): string{

  this.dataus = localStorage.getItem('connecteduser');
   console.log(this.dataus.usermail);
    
    for(let x of this.dataus.roles) {
      console.log("*****************");
      console.log(x.name);
      return x.name;
    }
  } */
}

