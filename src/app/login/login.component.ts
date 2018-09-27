import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from '../app.component';
import { WebapiService } from '../httpClientShared/webapi.service';
import { ACCESS_TOKEN } from '../httpClientShared/constants';
import { Router } from '@angular/router';
import { User } from '../httpClientShared/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  usermail: string ;
  password: string ;
  
  constructor(private appcomp: AppComponent,private webapiservice: WebapiService,private router: Router) { }

  ngOnInit() {
  }
  ngOnDestroy(){
    
  }

  auth(usermail: string, password: string){
    this.webapiservice.postlogin(usermail,password).subscribe(res => localStorage.setItem(ACCESS_TOKEN,res));

     console.log(localStorage.getItem(ACCESS_TOKEN));

     if(!localStorage.getItem(ACCESS_TOKEN)) {
      return Promise.reject("No access token set.");
      }
     else{

      this.webapiservice.getCurrentUser()
      .subscribe(user =>{
        localStorage.setItem('connecteduser', JSON.stringify(user));
        localStorage.setItem('mail',usermail);
      }); 

      this.router.navigate(['home']);

        }
  }
}
