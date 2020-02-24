import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "rest/user/register"
  private _loginUrl = "/rest/login/user"
  constructor(private http:HttpClient,private _router: Router) { }

  registerUser(user:any){
    return this.http.post<any>(this._registerUrl,user);
  }

  login(user:any){
    return this.http.post<any>(this._loginUrl,user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userToken');
    this._router.navigate(['/login'])
}

isUserLoggedIn() {
  let user = localStorage.getItem('userToken');
  if (user === null) {
    this._router.navigate(['/login'])
    return false
  }
  return true
}


}
