import { Component, OnInit, ViewChild } from '@angular/core';
//import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Instructions } from '../_models/Instructions.model';
import { InstructionService } from '../_services/instruction.service';
import { Router } from '@angular/router';
import { Port } from '../port';
/* 
import { MatTableDataSource} from '@angular/material/table'; */
import {MatTableDataSource} from '@angular/material';
/* 
import { MatSort } from '@angular/material/sort'; */
import {MatPaginator} from '@angular/material/paginator';
import {Sort} from '@angular/material';
import {PageEvent} from '@angular/material';

import {} from './cdk-detail-row.directive'
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { NotifyDialogBoxComponent } from '../notify-dialog-box/notify-dialog-box.component';
import {AddInstructionComponent} from '../add-instruction/add-instruction.component'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-instruction-list',
  templateUrl: './instruction-list.component.html',
  styleUrls: ['./instruction-list.component.css']
})
export class InstructionListComponent implements OnInit { 
  filter;
  p: number = 1;
  result;

  dataSource: MatTableDataSource<Instructions>;
  pageSize = 5;
  currentPage = 0;
  totalSize = 0;

  displayedColumns: string[] = ['image', 'details', 'edit','delete']; 

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  Element : Instructions; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  array: any;
  count: Array<string> = new Array();
  bind: boolean;
  port: Port = new Port();
  
  constructor(private service: InstructionService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
     this.getArray();
   }
  
  public createImgPath = (image:string) => {

    return "http://localhost:" +this.port.port+"/Resources/Images/"+image;
    
  }
  Edit(instruction){

    this.service.instruction = instruction;
    this.router.navigate(['/AddInstructions'])
  }
  Delete(instruction){
    if(confirm("Are you sure to delete Instruction")) {
      this.service.DeleteInstruction(instruction.id).subscribe(response=>{
        console.log(response);
        alert("Deleted Successfully")
        this.getArray();
      })
    }
    
  }
  ViewImage(){
     this.dialog.open(NotifyDialogBoxComponent);

  }
  private getArray() {
    this.service.GetInstructions().subscribe(  
      (data : Instructions[]) => {  

        this.dataSource = new MatTableDataSource < Instructions > (data);

       // console.log("data source ="+this.dataSource.data);
        
        this.dataSource.paginator = this.paginator;
        this.array = data;
        this.totalSize = this.array.length;
        this.iterator();

        for(let i=1;i<this.array.length;i++){
          this.count.push(i.toString());
          console.log(this.count);
        }
        this.bind = true;

      }  
    );
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  

private iterator() {
  const end = (this.currentPage + 1) * this.pageSize;
  const start = this.currentPage * this.pageSize;
  const part = this.array.slice(start, end);
  this.dataSource = part;
} 
}
