import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SsrService  implements OnInit{

  public href: string = "";
  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
}

}
