import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Firstname:string="";
  Lastname:string="";
  email:string="";
  password:string="";
  UserRegistration:string="";
  RegistrationInitiated:boolean=false;
 userData:any={
  firstname: "",
  lastname: "",
  username: "",
  password: ""
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  Register()
  {
    this.RegistrationInitiated=true;
    this.userData={
      firstname: this.Firstname,
      lastname: this.Lastname,
      username: this.email,
      password:this.password
    }
    console.log("Registration details :");
    console.log(this.Firstname+" "+this.Lastname+" "+this.email+" "+this.password);
    this.http.post<any>('http://localhost:8081/api/adduser', 
    this.userData).subscribe(data => {
      console.log(data)
      if(data)
      {
        this.UserRegistration="Success";
      }
      else
      this.UserRegistration="Failed";
    })
  }
}
