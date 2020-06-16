import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';
import { User } from '../user';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table'


@Component({
  selector: 'app-discollectors',
  templateUrl: './discollectors.component.html',
  styleUrls: ['./discollectors.component.css']
})
export class DiscollectorsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'phoneNumber','email'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  collectors: User[] = [];


  constructor(private Service: ScheduleService, public router: Router) {
    this.Service.getallcol().subscribe(a => {
      this.collectors = a;
    this.dataSource = new MatTableDataSource(this.collectors);
    console.log(this.dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      console.log(a)
    })

  }

  ngOnInit(): void {
    this.Service.getallcol().subscribe(a => {
      this.collectors = a;
      //console.log(a)
    })

   

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
