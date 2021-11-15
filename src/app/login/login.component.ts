import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLabel } from '@angular/material/form-field';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginapi :LoginService,public router: Router) { }

  username:any;
  pass:any;
  loading:boolean=false;
  msg:any;

  ngOnInit(): void {
    
   
  }
  
  login(){

    if(this.username==''){
      alert("user name is blank")
    }
    else if(this.pass==''){
      alert("password is blank")
    }
    else {
      this.loading=true
      var data={
        "username": this.username,
        "password": this.pass,
        "appname": "Dentsu",
        "loginType": "employee",
        "portalName": "mynavi",
        "deviceInfo": '{"browser":"Chrome","browserVersion":"90","os":"MacIntel","deviceId":"","ip":"114.134.26.124"}'
      }

      this.loginapi.login(data).subscribe((json:any)=>{
        console.log("json",json);
        var username= json.response.username
        console.log("username is",username)
        localStorage.setItem("username",username)
        this.loading=false;
        this.msg=json.edesc;
        if(json.status==200){    
          this.router.navigateByUrl('page');
        } 
      })

    

    }
  }
} 
