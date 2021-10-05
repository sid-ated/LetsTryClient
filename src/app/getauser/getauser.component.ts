import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/userservice';

@Component({
  selector: 'app-getauser',
  templateUrl: './getauser.component.html'
})
export class GetauserComponent implements OnInit {

  Id: string;

  FirstName: string;
  LastName: string;

  Method: string;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  handleSearchId(){
      this.Method = "byid";
      this.router.navigate(['/queryUser', this.Id, this.Method]);
  }

  handleSearchName(){
    this.Method = "byname";
    this.router.navigate(['/queryUser', this.FirstName, this.LastName, this.Method]);
  }

  ngOnInit() {
  }

}
