import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PromotionslistService } from '../_services/promotionslist.service';
import { Router } from '@angular/router';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Promotion } from '../_models/promotion';
import { } from './cdk-detail-row.directive'
import { HttpClient, HttpEventType, HttpHeaders, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-promotions-list',
  templateUrl: './promotions-list.component.html',
  styleUrls: ['./promotions-list.component.css'],
  animations: [trigger('detailExpand', [
    state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
    state('*', style({ height: '*', visibility: 'visible' })),
    transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
],
})
export class PromotionsListComponent implements OnInit {
  filter;
  p: number = 1;
  promotions:Promotion;
  result;

  dataSource: MatTableDataSource<Promotion>;
  pageSize = 5;
  currentPage = 0;
  totalSize = 0;

  displayedColumns: string[] = ['name', 'requiredPoints','dateFrom','dateTo', 'company.name','delete','moreDetials','id'];

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  Element : Promotion;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  array: any;
  clientPoints;
  onMain: boolean = false;
  
  constructor(private service: PromotionslistService,private router:Router) { }

  ngOnInit(): void {
    
    this.getArray();
  }

  delete(item){

    
    if(confirm("Are you sure to delete promotion")) {

      this.service.deletePromotion(item.id).subscribe((response:Response)  => {
       
        this.getArray();
      },
        err => {
          console.log(err);
          alert("Can't delete promotions");
        });
    }
  }
  
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

public handlePage(e: any) {
  this.currentPage = e.pageIndex;
  this.pageSize = e.pageSize;
  this.iterator();
}

private getArray() {
  this.service.getPromotions().subscribe(  
    (data : Promotion[]) => {  
      this.dataSource = new MatTableDataSource < Promotion > (data.sort(function(a,b) { 
        return new Date(b.DateFrom).getTime() - new Date(a.DateFrom).getTime() 
    }));
      console.log("data",this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.array = data;
      this.totalSize = this.array.length;
      this.iterator();
      console.log("hi")
    }  ,err=>{
      setTimeout(() => this.router.url,10000); 
      this.getArray();
    }
  );
}
private iterator() {
  const end = (this.currentPage + 1) * this.pageSize;
  const start = this.currentPage * this.pageSize;
  const part = this.array.slice(start, end);
  this.dataSource = part;
}

}
