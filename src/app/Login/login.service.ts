import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:8081';

  public addRe(Username:string,password:string) {
    return this.http.get(this.API + '/api/user/'+Username+'/'+password)
    
  }

  
}
