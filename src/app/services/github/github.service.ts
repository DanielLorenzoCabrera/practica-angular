import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // new way
//import { map } from 'rxjs/operators' deprecated


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username : string;
  private client_id : string = "da9c754bde678599ef25";
  private client_secret : string = "dcabceb73d4bab849db5f32169ff3a55bdbdef2f";

  constructor(private http: HttpClient) {
    this.username = "bradtraversy";
  }

  getUser(){
    return this.http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }

  getRepos(){
    return this.http.get(`http://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }

  updateUser(username :string){
    this.username = username;
  }

}
