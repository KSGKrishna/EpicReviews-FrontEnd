import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  enable:boolean=true;
  movie:string="";
  movieinfo:any;
  rating:number;
  Name:string="";
  Comment:string="";
  Userloggedin:boolean=false;
  reviews:any[]=[];

  constructor(private http:HttpClient,private messageService: MessageService) { }

  ngOnInit(): void {
    if(localStorage.getItem("Userloggedin")!=undefined)
    {
      this.Userloggedin=true;
    }
    const urlParams = new URLSearchParams(window.location.search);
    this.movie = urlParams.get('movie');
    console.log(this.movie);
    
    this.LoadMovieDetails();
  }

  LoadMovieDetails()
  {
    this.movieinfo={}
    this.http.get("http://localhost:8081/api/getmovie/"+this.movie).subscribe((response:any)=>{
      

      console.log(response[0])
      //  var data=response[0].
      response[0].genre=(response[0].genre).split(",");
        response[0].language=(response[0].language).split(",");
        response[0].country=(response[0].country).split(",");
        response[0].director=(response[0].director).split(",");
        response[0].writer=(response[0].writer).split(",");
        response[0].actors=(response[0].actors).split(",");
      this.movieinfo=response[0]
      console.log(this.movieinfo)
    })
   this.GetReviews()

   
  }
  GetReviews(){
    this.http.get("http://localhost:8081/getreview/"+this.movie).subscribe((response:any)=>{
      

      console.log(response)
      this.reviews=response;
    
    })
  }

  SubmitReview(title:string)
  {
    this.clear();
    console.log(this.Comment+" "+this.rating+" "+this.Name+" "+title);

    var review={
      rvwid: this.movie,
      movies: this.movieinfo.title,
      reviews: this.Comment,
      rating: this.rating,
      user: this.Name
    }
    console.log(review);
    this.http.post("http://localhost:8081/addreview", review).subscribe(Data=>{
      this.GetReviews()
    });
    this.ShowToast();
  }

  ShowToast() {
    this.messageService.add({severity:'success', summary:'Review is submitted for approval'});
}

clear() {
        this.messageService.clear();
    }
    DataChanged()
  {
    console.log("called")
    if(this.rating>0 && this.Comment!="" && this.Name!="")
    {
      this.enable=false;
    }
    else
    this.enable=true;
  }

}
