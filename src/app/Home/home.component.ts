import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Movies: any[];
  Genre:any[]=[];

  constructor(private router:Router) { 
    
    this.Movies = [
      {
        image: 'image1.avif',
        width: 1200,
        numScroll: 3
      },
      {
        image: 'image2.avif',
        width: 1300,
        numScroll: 3
      },
      {
        image: 'image3.avif',
        width: 1200,
        numScroll: 3
      },
      {
        image: 'image4.avif',
        width: 1300,
        numScroll: 3
      }
  ];
  this.Genre=["Action","Adventure","Thriller","Romance","Comedy","Sci-Fi","Drama","Fantasy","Biography","Crime","History"]
  }

  ngOnInit(): void {
  }

  ShowMovies(item)
  {
    this.router.navigate(
      ['/movies'],
      { queryParams: { genre: item,search:"" } }
    );
  }

  
}
