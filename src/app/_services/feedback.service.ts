import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../_models/feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  getFeedbacks(): Observable<Feedback[]>{

    return this.http.get<Feedback[]>("http://localhost:50856/api/feedback/getfeedbacks");
   }

  constructor(private http:HttpClient) { }
}
