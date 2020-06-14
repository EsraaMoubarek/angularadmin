import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';
import { Region } from '../region'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DataSource } from '@angular/cdk/table'
import { DismapComponent } from '../dismap/dismap.component';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-disregions',
  templateUrl: './disregions.component.html',
  styleUrls: ['./disregions.component.css']
})
export class DisregionsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name',];
  selection = new SelectionModel<DismapComponent>(true, []);
  dataSource: MatTableDataSource<Region>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  regs: Region[] = [];

  constructor(private Service: ScheduleService, public router: Router) {
    this.Service.getallreg().subscribe(a => {
      this.regs = a;
      this.dataSource = new MatTableDataSource(this.regs);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(a)
    })
  }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log("jjj");
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  dir(){
    this.router.navigateByUrl("/dismaps");

  }
  // openDialog(data): void {
  //   //debugger;  
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.position = {
  //     'top': '100px',
  //     'left': '500px'
  //   };
  //   dialogConfig.width = '500px';
  //   dialogConfig.height = '500px';
  //   dialogConfig.data = {
  //     idtr: data.id
  //   };
   //let tryi = this.dialog.open(DismapComponent, dialogConfig);
  //}

}
