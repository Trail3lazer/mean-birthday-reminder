import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  logout: any;
  constructor(auth: AuthService) { 
    this.user = auth.getuser();
    this.logout = auth.logout;
  }

  checkForUser(){
    if(this.user) return true
    else return false;
  }

  ngOnInit() {
  }

}
