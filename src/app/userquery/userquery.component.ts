import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserWithId} from '../entity/UserWithId';
import { UserService } from '../services/userservice';
import { KycService } from '../services/kycservice';

@Component({
  selector: 'app-userquery',
  templateUrl: './userquery.component.html'
})
export class UserqueryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private kycService: KycService) { 
  }

  allUsers: UserWithId[] = [];
  
  getUserByName(FirstName: string, LastName: string){
    this.userService.getUsersByName(FirstName, LastName).subscribe(data => {
      this.allUsers = data;
    })
  }
  
  getUserById(id: string){
    this.userService.getUserById(id).subscribe(data => {
      this.allUsers.push(data);
    })
  }

  editUser(){
    alert("Still Under Development");
  }

  deleteUser(){
    alert("Still Under Development");
  }

  verifyKyc(user: any){
    this.kycService.verifyKyc(user).subscribe(response => {
      alert(response.Value);
    })
  }

  ngOnInit() {
    
    const method = this.route.snapshot.paramMap.get('method');

    if(method == 'byid'){
      const id = this.route.snapshot.paramMap.get('id');
      this.getUserById(id);
    }

    if(method == 'byname'){
      const firstName = this.route.snapshot.paramMap.get('FirstName');
      const lastName = this.route.snapshot.paramMap.get('LastName');
      this.getUserByName(firstName, lastName);
    }
  }

}
