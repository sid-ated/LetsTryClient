import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/userservice';
import { User } from '../entity/User';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html'
})

export class RegisteruserComponent implements OnInit {

  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  PlaceOfBirth: string;
  MobileNumber: string;
  EmailId: string;

  user = new User();

  Id: string;

  Method: string = 'byid';

  constructor(private router: Router, private userService: UserService) { }

  handleRegister(){

    this.user.FirstName = this.FirstName;
    this.user.LastName = this.LastName;
    this.user.DateOfBirth = this.DateOfBirth;
    this.user.PlaceOfBirth = this.PlaceOfBirth;
    this.user.MobileNumber = this.MobileNumber;
    this.user.EmailId = this.EmailId;

    //console.log(this.user);

    this.userService.addUser(this.user).subscribe(data => {
      this.Id = data.Id;
      //console.log(this.Id);
      this.router.navigate(['/queryUser', this.Id, this.Method]);
    }, error => alert(JSON.stringify(error.error)))
  }

  ngOnInit(){

  }
}
