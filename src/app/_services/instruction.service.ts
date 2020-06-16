import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Port } from '../port';
import { Instructions } from '../_models/Instructions.model';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  port: Port = new Port();
/*   onMainEvent: EventEmitter<Instructions> = new EventEmitter();
 */  

  instruction : Instructions;
  constructor(private httpService: HttpClient) { }

  UploadInstructionImage(formData:FormData){
    return this.httpService.post('http://localhost:'+this.port.port+'/Api/Instructions/UploadInstructionImage/', 
    formData, {reportProgress: true, observe: 'events'})
  }

  AddInstructionDetails(instruction: Instructions){
   return this.httpService.post('http://localhost:'+this.port.port+'/Api/Instructions/AddInstructionDetails/',
          JSON.stringify(instruction),
          {headers: new HttpHeaders({ "Content-Type": "application/json; charset=utf-8"})}
          )
  }

  GetInstructions(){
    return this.httpService.get('http://localhost:'+this.port.port+'/Api/Instructions/GetInstructions/')
  }

  EditInstruction(credentials){
    return this.httpService.put('http://localhost:'+this.port.port+'/Api/Instructions/EditInstruction/'
    , JSON.stringify(credentials),
    {headers: new HttpHeaders({ "Content-Type": "application/json; charset=utf-8"})})
  }

  DeleteInstruction(id){
    return this.httpService.delete('http://localhost:'+this.port.port+'/Api/Instructions/DeleteInstruction/'+id)
  }
 
}
