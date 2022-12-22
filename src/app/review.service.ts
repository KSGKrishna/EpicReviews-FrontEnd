import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:9090';

  public addReview(reviewData) {
    return this.http.post(this.API + '/addReview', reviewData);
  }

  
  public getReviews() {
    return this.http.get(this.API + '/getReviews');
  }

  public deleteReview(r_no: any) {
    return this.http.delete(this.API + '/deleteReview?r_no=' + r_no);
  }

  public updateReviews(student: any) {
    return this.http.put(this.API + '/updateReviews', student);
  }
}

