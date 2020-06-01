import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.css']
})
export class AdddriverComponent implements OnInit {
  newdriver: User = new User();

  constructor(private formbulider: FormBuilder, private userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }
  savedriver() {

    this.userService.createDriver(this.newdriver).subscribe(a=>{
      console.log(a);
      alert(a.userName+" added sucessfully");
    })
  }

}
