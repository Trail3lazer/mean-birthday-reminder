import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { AuthService } from '../../_services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: any;
  badLogin: boolean = false;

  constructor(private location: Location, auth: AuthService) {
    // redirect to home if already logged in
    if (typeof AuthService === 'number') {
      this.location.go('/');
    }
    this.auth = auth;
  }

  onSubmit = async (l: any) => {
    // stop here if form is invalid
    if (l.invalid) {
      return;
    }
    let formData = l.value;
    this.auth.login(formData.name, formData.password, (res: boolean) => {
      if (res === true) {
        window.location.href = '/';
      } else {
        this.badLogin = true;
      }
    })
  }

  ngOnInit() {

  }

}
