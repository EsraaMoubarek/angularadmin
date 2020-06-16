import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port } from '../port';
import { SurveyQuestions } from '../_models/survey-questions';

@Injectable({
  providedIn: 'root'
})
export class SurveySurviceService {
  port:Port=new Port()
getAddSurvey(){
  return this.http.get("http://localhost:"+this.port.port+"/api/survey/GetAddSurvey",{observe: 'response',responseType:"json"})
}
addDiffQuesSurvey(survQues:SurveyQuestions[]){
  return this.http.post("http://localhost:"+this.port.port+"/api/survey/PostAddSurvey",survQues,{observe: 'response',responseType:"json"})
}
addFixedQuesSurvey(survQues:string[]){
  return this.http.post("http://localhost:"+this.port.port+"/api/survey/PostFixedQues",survQues)
}
  constructor(private http:HttpClient) { }
}
