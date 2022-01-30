import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // new way
//import { map } from 'rxjs/operators' deprecated


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username : string;
  private client_id : string = "7e50830a703cdd27069c";
  private client_secret : string = "f8bf0534ab200177c1a4bd221342e1bf6c91c777";

  constructor(private http: HttpClient) {
    this.username = "bradtraversy";
  }

  getUser(){
    return this.http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }

  getRepos(){
    return this.http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}/repos`);
  }

  updateUser(username :string){
    this.username = username;
  }

}
