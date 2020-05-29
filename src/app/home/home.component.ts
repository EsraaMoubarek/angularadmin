import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() {

    
   }

  ngOnInit(): void {
  }
  title = 'googleMaps';
  position={
    lat:31.200092,
    lng:29.918739
  };

  label={
    color:'black',
    text:'Marker'
  };

}
