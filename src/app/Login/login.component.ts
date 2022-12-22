import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Username:string="";
  Password:string="";
  LoggedIn:number=0;
  Admin:boolean=false;
  title:string="Login"

  
  message:string="";
  loginFailed:boolean=false;
  loginClicked:boolean=false;

  constructor(private router:Router,
    private loginservice:LoginService) { }

  ngOnInit(): void {
  }

  Login()
   {
    this.loginClicked=true;
    this.loginservice.addRe(this.Username,this.Password).subscribe((data:any)=>{
      console.log(data)
      this.LoggedIn=data
      console.log("Username :"+this.Username);
      console.log("Password :"+this.Password);
      if(this.LoggedIn)
      {
        console.log(this.LoggedIn)
        localStorage.setItem("Username",this.Username);
        localStorage.setItem("Userloggedin","true");
        this.router.navigate([''])
        .then(() => {
          window.location.reload();
        });
        
  }
     else
      {
        this.loginFailed=true;
        this.message="User Credentials are incorrect.";
      }
   })
    
    // if(this.Username=="kapil" && this.Password=="kapil123")
    //   {
    //     localStorage.setItem("Username",this.Username);
    //     localStorage.setItem("Userloggedin","true");
    //     localStorage.setItem("admin","false");

    //     this.router.navigate([''])
    //     .then(() => {
    //       window.location.reload();
    //     });
        
    //   }
    //   else
    //   {
    //     this.loginFailed=true;
    //     this.message="User Credentials are incorrect.";
    //   }
  }


  AdminLogin(login:NgForm)
  {
    login.reset();
    this.Admin=true;
  }

  UserLogin(login:NgForm)
  {
    login.reset();
    this.Admin=false;
  }

  ValidateAdmin()
  {
    this.loginClicked=true;
    if(this.Username=="admin" && this.Password=="admin123")
      {
        localStorage.setItem("Username",this.Username);
        localStorage.setItem("Userloggedin","true");
        localStorage.setItem("admin","true");

        this.router.navigate([''])
        .then(() => {
          window.location.reload();
        });
        
      }
      else
      {
        this.loginFailed=true;
        this.message="Admin Credentials are incorrect.";
      }

  }

}
