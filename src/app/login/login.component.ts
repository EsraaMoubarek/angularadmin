// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { AuthService } from 'src/app/guards/auth.service';
// import{TestService} from 'src/app/guards/test.service'
// import * as myGlobals from 'src/app/guards/test.service'
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { Port } from '../_models/port';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validLogin: boolean;
  // global:TestService=new TestService()
  token: string;

  //  port:Port=new Port()
  constructor(public http: HttpClient, public router: Router) { }
  login(form: NgForm) {

    let credentials = JSON.stringify(form.value);
    this.http.post("http://localhost:50856" + "/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.token = (<any>response).token;
      localStorage.setItem("jwt", this.token);
      this.validLogin = true;
      //this.port.valid=true;
      //console.log(this.port.valid)
      console.log(response);
      const dec = new JwtHelperService();
      const decot = dec.decodeToken(this.token);
      console.log(decot);
      if (decot.role == "admin") {
        this.router.navigateByUrl("/Home");
      }
      else if(decot.role == "manager") {
        this.router.navigateByUrl("/Manager");
      }
      else {
        alert("Invalid LogIn");
      }
    }, err => {
      // this.invalidLogin = true;
      alert("You NOT Regestiered In The System");

    });
    //   let token = localStorage.getItem("jwt");
    //   this.http.get("http://localhost:50856"+"/Region", {
    //     headers: new HttpHeaders({
    //    // "Authorization":"Bearer "+this.token,
    //       "Content-Type": "application/json"
    //     })
    //   }).subscribe(response => {
    //     console.log(response)
    //     this.router.navigateByUrl("/Home"); //go here
    //   }, err => {
    //     console.log(err)
    //   });
    //   // this.http.get("http://localhost:"+this.port.port+"/api/address").subscribe(a=>console.log(a))
    //   // console.log("hello");
  }

  getData() {
    // return this.http.get("http://localhost:5000/api/customer",{
    //   headers: new HttpHeaders({
    //     "Authorization":"Bearer "+this.token
    // }) 
    //})
  }
  ngOnInit(): void {
    //console.log("init",this.port.valid)
  }

}

// http://localhost:5000/api/auth/login
