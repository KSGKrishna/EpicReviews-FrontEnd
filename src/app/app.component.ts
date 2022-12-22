import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Movie';
  Username:string="";
  searchString:string="";

  constructor(private router:Router)
  {}

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem("Userloggedin"))!=undefined)
    {
    this.Username= localStorage.getItem("Username")
    }
    console.log(this.Username)
  }

  SearchMovies()
  {
    console.log(this.searchString)
    this.router.navigate(
      ['/movies'],
      { queryParams: { genre: "",search: this.searchString } }
    ).then(() => {
      window.location.reload();
    });
  }

  Logout()
  {
    localStorage.removeItem("Userloggedin");
    localStorage.removeItem("Username");
    localStorage.removeItem("admin");
    location.reload();
  }

}
