import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KycService } from '../services/kycservice';
import { User } from '../entity/User';

@Component({
  selector: 'app-kycverification',
  templateUrl: './kycverification.component.html'
})

export class KycverificationComponent implements OnInit {

  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  PlaceOfBirth: string;
  MobileNumber: string;
  EmailId: string;

  user = new User();

  constructor(private router: Router, private kycService: KycService) { }

  handleVerification(){

    this.user.FirstName = this.FirstName;
    this.user.LastName = this.LastName;
    this.user.DateOfBirth = this.DateOfBirth;
    this.user.PlaceOfBirth = this.PlaceOfBirth;
    this.user.MobileNumber = this.MobileNumber;
    this.user.EmailId = this.EmailId;

    console.log(this.user);

    this.kycService.verifyKyc(this.user).subscribe(response => {
      alert(response.Value);
    })
  }

  ngOnInit(){

  }

}
