import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { WebapiService } from './httpClientShared/webapi.service';
import { HttpHeaderResponse } from '@angular/common/http';
import { ACCESS_TOKEN } from './httpClientShared/constants';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public href: string = "";
  isroot:boolean;

  

   //userObservable : Observable<User[]> ; 

  constructor(private location: Location,private router:Router,private webapiservice: WebapiService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(this.location.path() !==''){
        this.isroot = true;
      } else {
        this.isroot = false;
      }
    })  
  }
  


}
