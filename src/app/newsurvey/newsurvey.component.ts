import { Component, OnInit } from '@angular/core';
import { SurveyQuestions } from '../_models/survey-questions';
import { SurveySurviceService } from '../_services/survey-survice.service';

@Component({
  selector: 'app-newsurvey',
  templateUrl: './newsurvey.component.html',
  styleUrls: ['./newsurvey.component.css']
})
export class NewsurveyComponent implements OnInit {

  public sss:string[]=[]
  ss:SurveyQuestions[]=[]
// public ss = new Array<SurveyQuestions>(3);
//public survQues:SurveyQuestions[]=new SurveyQuestions() [3] //not good 
//survQues:Array<SurveyQuestions> = []
  survQues=new Array<string>();
  survQues1:SurveyQuestions=new SurveyQuestions()
  survQues2:SurveyQuestions=new SurveyQuestions()
  survQues3:SurveyQuestions=new SurveyQuestions()

  add(){}

  constructor(public survServ:SurveySurviceService) { 
  //  router.navigate([{outlets: {primary: '/Ques' ,moreQues: '/Ques'}}]);
  console.log(this.survQues)}
  fillSurveyArray(){
    // this.ss.push(this.survQues1)
    // this.ss.push(this.survQues2)
    // this.ss.push(this.survQues3)
    // console.log(this.survQues)
    // console.log(this.ss)

   this.survServ.getAddSurvey().subscribe(
     response=>{
      console.log(response)

      this.survServ.addFixedQuesSurvey(this.survQues).subscribe(
        response=>{console.log(response)
          alert("Fixed Questions added successfully");
      // this.survServ.addDiffQuesSurvey(this.ss).subscribe(a=>{console.log(a)
      //   alert("Customized questions Questions added successfully");
     // })
    })
  })

   //this.addSurv(this.survQues)
  }
addSurv(survy:SurveyQuestions[]){
  console.log(this.survQues)
//this.ss[1].Question="hii"

   
  

}
  ngOnInit(): void {
    
  }

}

