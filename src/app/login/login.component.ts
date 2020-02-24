import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:any = {}

  constructor( private _router: Router,private _auth:AuthService) { }

  ngOnInit() {
  }
  loginUser(){
    localStorage.setItem("userToken",btoa(this.loginUserData.id+':'+this.loginUserData.password));
    this._auth.login(this.loginUserData)
    .subscribe(
      res=>{
        console.log(res)
        this._router.navigate(['/home'])
      },
      err=>{
        console.log(err)
        localStorage.removeItem("userToken");
        this._router.navigate(['/login'])
      }
    )
    
  }
}
