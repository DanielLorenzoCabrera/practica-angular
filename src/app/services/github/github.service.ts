import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // new way
//import { map } from 'rxjs/operators' deprecated


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username : string;

  constructor(private http: HttpClient) {
    this.username = "bradtraversy";
  }

  getUser(){
    return this.http.get('http://api.github.com/users/' + this.username);
  }

}
