import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  auth: any;
  newUser: boolean = true;

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  onSubmit = (l: any) => {
    // stop here if form is invalid
    if (l.invalid) {
      return;
    }
    let formData = l.value;
    this.auth.signup(formData, (res: any) =>{
      if (res) window.location.href = '/'; 
      else this.newUser = res;
    })
  }
  ngOnInit() {
  }

}
