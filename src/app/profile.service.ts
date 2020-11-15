import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit{
  private clientid = 'Iv1.b39a9ac1fc56ff9d';
  private clientsecret = '6bf06bf90964d4b26d7518e90aaaf35c5cc7c0a9';

  constructor(private http: HttpClient) {
    console.log("service is now ready");
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   getProfileInfo(username){
    interface apiUrl {
      login: string,
      avatar_url: string,
      blog:string,
      name:string,
      public_repos: number,
      followers: number,
      following: number,
      }
      return this.http.get<apiUrl>("https://api.github.com/users/" + username + "?client_id=" +
      this.clientid + "&client_secret=" + this.clientsecret);    
      
      
    
   }
  
    getProfileRepos(username){
    interface apiUrl {
      name: string,
      html_url: string,
      description:string
      }
    return this.http.get<apiUrl>("https://api.github.com/users/" + username + "/repos?client_id=" +
     this.clientid + "&client_secret=" + this.clientsecret);    
   }
}
