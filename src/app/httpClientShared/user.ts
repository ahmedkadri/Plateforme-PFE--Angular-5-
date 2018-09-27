import { Injectable } from "@angular/core";

@Injectable()
export class User {

    userid: string;
    firstname: string;
    lastname: string;
    usermail: string;
    password: string;
    roles: Set<string> = new Set<string>();



}