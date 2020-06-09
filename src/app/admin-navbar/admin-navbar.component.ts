import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminNavbarComponent implements OnInit {
  title = 'Waste App';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Schedule',
        link: '/Schedule',
        index: 0
      }, {
        label: 'Add Driver',
        link: '/adddriver',
        index: 1
      }, {
        label: 'Add Collector',
        link: '/addcol',
        index: 2
      }, {
        label: 'Promotions Company',
        link: '/addcomp',
        index: 3
      },
      {
        label: 'Waste Prices',
        link: '/Waste',
        index: 4
      },
      {
        label: 'FeedBacks',
        link: '/feedback',
        index: 5
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}


