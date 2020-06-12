import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';
import { User } from '../user';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table'

@Component({
  selector: 'app-disdrivers',
  templateUrl: './disdrivers.component.html',
  styleUrls: ['./disdrivers.component.css']
})
export class DisdriversComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'phoneNumber','email'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  drivers: User[] = [];

  constructor(private Service: ScheduleService, public router: Router) {
    this.Service.getalldri().subscribe(a => {
      this.drivers = a;
    this.dataSource = new MatTableDataSource(this.drivers);
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

}
