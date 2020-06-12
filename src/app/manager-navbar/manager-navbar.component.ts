import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manager-navbar',
  templateUrl: './manager-navbar.component.html',
  styleUrls: ['./manager-navbar.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ManagerNavbarComponent implements OnInit {
  title = 'Waste App';
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) { 
    this.navLinks = [
      {
        label: 'Home',
        link: '/Manager',
        index: 0
      }, {
        label: 'Collectors',
        link: '/discol',
        index: 1
      }, {
        label: 'Drivers',
        link: '/disdriv',
        index: 2
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
