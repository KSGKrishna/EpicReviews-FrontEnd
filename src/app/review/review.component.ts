import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
   title='ReviewDashboard'
   reviewDetails = null as any;
  reviewToUpdate = {
    r_no:"",
    moviename:"",
    review:"",
    rating:""
  }
 ReviewDetails: null;
review: any;
  constructor(private reviewService:ReviewService) { 
  this.getReviewsDetails();
  }
  ngOnInit(): void {
  }

  register(registerForm: NgForm){
    this.reviewService.addReview(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        registerForm.reset();
        this.getReviewsDetails();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
   getReviewsDetails() {
    this.reviewService.getReviews().subscribe(
      (resp) => {
        console.log(resp);
        this.reviewDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteReview(review: any) {
    this.reviewService.deleteReview(review.r_no).subscribe(
      (resp) => {
        console.log(resp);
        this.getReviewsDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(review: any){
    this.reviewToUpdate = review;
  }

  updateReview(){
    this.reviewService.updateReviews(this.reviewToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
