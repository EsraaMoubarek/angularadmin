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
        label: 'Home',
        link: '/Home',
        index: 0
      },
      {
        label: 'Schedule',
        link: '/Schedule',
        index: 1
      }, {
        label: 'Add Driver',
        link: '/adddriver',
        index: 2
      }, {
        label: 'Add Collector',
        link: '/addcol',
        index: 3
      }, {
        label: 'Promotions Company',
        link: '/addcomp',
        index: 4
      },
      {
        label: 'Waste Prices',
        link: '/Waste',
        index: 5
      },
      {
        label: 'FeedBacks',
        link: '/feedback',
        index: 6
      },
      {
        label: 'Instructions',
        link: '/AddInstructions',
        index: 7
      },
      { 
        label: 'Survey',
        link: '/Survey',
        index: 7
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}


