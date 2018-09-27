import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

import { WebapiService } from '../httpClientShared/webapi.service';
import { User } from '../httpClientShared/user';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Users ;
  public Users1 ;

  connacteduser = new User();
  btnvalue : string ="add text";
  mailtest: string;

  constructor(private appcomp: AppComponent,private webapiservice: WebapiService) {}

  ngOnInit() {
  
    this.getUsers(); 
      
    this.verif = this.getroles();
  }

  verif:string ;

  getUsers(){
    this.webapiservice.getUsers().subscribe(
      data => { this.Users = data },
      err => console.error(err),
      () => console.log('done loading User')
    );
  }

  getUsersone(){
    this.webapiservice.getCurrentUser()
    .subscribe(
      data => {this.Users1 = data }
    );
    

  }
  
  
 
 /* addServer(){
    console.log("button test");
  this.getUsersone();

  console.log("button mrigel ");
} */

  getroles(): string{

    for(let x of this.Users1.roles) {
      return x.name;
    }
  }
  
   
}
