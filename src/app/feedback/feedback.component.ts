import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../_services/feedback.service';
import { Feedback } from '../_models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbacks:Feedback[]=[];
  constructor(private feedbackServ:FeedbackService) { }

  ngOnInit(): void {
    this.feedbackServ.getFeedbacks().subscribe(f=>{
       this.feedbacks=f;
       console.log(this.feedbacks);
    })
  }

}
