import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addcol',
  templateUrl: './addcol.component.html',
  styleUrls: ['./addcol.component.css']
})
export class AddcolComponent implements OnInit {
  newcollector: User = new User();

  constructor(private formbulider: FormBuilder, private userService: UserService, public router: Router) { }

  ngOnInit(): void {
  }
  savecol() {

    this.userService.createCollector(this.newcollector).subscribe(a=>{
      console.log(a);
      alert(a.userName+" added sucessfully");
    })
  }
}
