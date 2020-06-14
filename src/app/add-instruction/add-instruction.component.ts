import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Port } from '../port';
import { HttpClient, HttpEventType, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Instructions } from '../_models/Instructions.model';
import { InstructionService } from '../_services/instruction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* 
import {InstructionListComponent} from '../instruction-list/instruction-list.component' */
@Component({
  selector: 'app-add-instruction',
  templateUrl: './add-instruction.component.html',
  styleUrls: ['./add-instruction.component.css']
})
export class AddInstructionComponent implements OnInit {
  port: Port = new Port();

  public progress: number;
  public message: string;
  public instruction : Instructions = new Instructions();
  public instructionAdded : Instructions = new Instructions();

  @Output() public onUploadFinished = new EventEmitter();
  

  group= new FormGroup({
    
    detialsControl: new FormControl( ),

    imageControl: new FormControl('', [Validators.required,] ,  ),

    idControl : new FormControl( ),
  })

  image: any;
  clicked:boolean = false;
  add = true;
  constructor(private service: InstructionService,private router:Router) { 
   
    /* this.service.onMainEvent.subscribe(
      (instruction) => {
        this.group.controls["idControl"].setValue(instruction.id) 
        this.group.controls["detialsControl"].setValue(instruction.details) 
        this.instruction = instruction as Instructions;
        console.log("Add",this.instruction.id);
      }
   ); */
  }

  ngOnInit(): void {
    this.instruction = this.service.instruction;
    console.log (this.instruction);
    if(this.instruction){
      this.group.controls["idControl"].setValue(this.instruction.id) 
      this.group.controls["imageControl"].setValue("DummyValue") ;
      this.add= false;
    if(this.instruction.details)
      this.group.controls["detialsControl"].setValue(this.instruction.details) 
  }
}

  public uploadFile = () => {
  
    if(!this.instruction){
      console.log("Add");
    let fileToUpload = <File>this.image ;
    const formData = new FormData();
    
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.service.UploadInstructionImage(formData).subscribe( (event)  => {
        console.log("event",event)
        event.type.valueOf
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';

          this.instructionAdded = event.body as Instructions;
          console.log(this.instructionAdded);
          this.instructionAdded.details = this.group.controls["detialsControl"].value
          this.service.AddInstructionDetails(this.instructionAdded).subscribe(Response=>{
            console.log(Response);
            
            alert(" Added Sucessfully");
            this.router.navigate(['/InstructionsList'])
          })
        }
      });
    }
    else{
      let credentials ={
        "id": this.group.controls["idControl"].value,
        "details" : this.group.controls["detialsControl"].value
      }
      this.service.EditInstruction(credentials).subscribe(response=>{
        console.log(response);
        
        alert(" Edited Sucessfully");
        this.router.navigate(['/InstructionsList'])
      })
    }
  }
  imageUpload(e) {
    this.clicked = true;
    this.progress =0;
    this.message = null; 
   
    this.image = e.target.files[0];
  }

}
