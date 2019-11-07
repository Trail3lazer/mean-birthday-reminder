import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../../_services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userId;
  constructor(auth: AuthService) {
    this.userId = auth.getuser()['id'];
  }

  onSubmit(f: NgForm) {
    f.value.userId = this.userId
    fetch("/api/birthday", {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(f.value)
    }).then((response)=>{response.json()})
    .then(res=>{
      console.log(res);
      window.location.reload();
    }).catch(err=>console.log(err))
  }


  ngOnInit() {
  }
  

}
