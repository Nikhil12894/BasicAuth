import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  isAllOn = false;
  isAllOff = false;
  styleCss = { 'color': 'white' };
  allOnCss: any;
  allOffCss: any;

  esp8266Arrr = [
    { pin: 2, name: 'kitchen', value: false, discription:""},
    { pin: 3, name: 'hall', value: true , discription:""},
    { pin: 4, name: 'BedRoom', value: false, discription:""},
    { pin: 5, name: 'BathRoom', value: true, discription:""}
  ];

  constructor(private _auth:AuthService,private _rout:Router) {
    

    this.addCheckboxes();
  }

  private addCheckboxes() {

  }

  ngOnInit() {
    this._auth.isUserLoggedIn();
  }

  onOff(data: any) {
    data.value = !data.value;
    this.togelAllOnOff();
  }

  allOn() {
    this.esp8266Arrr.forEach(element => {
      element.value = true;
    });
    this.allOnCss = this.styleCss;
    this.allOffCss = "";
  }

  allOff() {
    this.esp8266Arrr.forEach(element => {
      element.value = false;
    });
    this.allOnCss = "";
    this.allOffCss = this.styleCss;
  }


  togelAllOnOff() {
    var allOn = true;
    var allOff = true;
    this.esp8266Arrr.forEach(element => {
      allOn = allOn && element.value;
    });
    if (allOn) {
      this.allOnCss = this.styleCss;
      this.allOffCss = "";
    }
    this.esp8266Arrr.forEach(element => {
      allOff = allOff && !element.value;
    });
    if (allOff) {
      this.allOnCss = "";
      this.allOffCss = this.styleCss;
    }

    if (!allOff&&!allOn) {
      this.allOnCss = "";
      this.allOffCss ="";
    }
  }

}
