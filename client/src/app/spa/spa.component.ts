import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services'

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent implements OnInit {
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
