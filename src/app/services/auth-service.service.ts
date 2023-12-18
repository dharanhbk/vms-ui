import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authUrl:string;

  constructor(private http: HttpClient) {
    this.authUrl = " http://localhost:9000"
   }

   authorize(){
    console.log("Came to service method")
    return this.http.get(`${this.authUrl}/oauth2/authorize?code_challenge=Lb_adNlATEOgzh4VMJzrVslng47fodO8oNzKj9_BTNE&client_id=gokul-client&code_challenge_method=S256&response_type=code&redirect_uri=http://127.0.0.1:4200/login/oauth2/code/gokul-client&scope=openid`)
  }
  login(){
    // return 
  }
}
