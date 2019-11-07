import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userId: any;
  birthdays: any;

  constructor(auth: AuthService) {
    this.userId = auth.getuser()['id']
    let savedArr = sessionStorage.getItem('bdayArr');

    if (savedArr !== undefined || this.userId !== JSON.parse(savedArr[0]).userId) {
      this.birthdays = fetch("/api/birthday/" + this.userId).then(async res => {
        let bdayArr = await res.json();
        console.log(bdayArr)
        sessionStorage.setItem('bdayArr', JSON.stringify(bdayArr));
        return bdayArr;
      })
    } else {
      this.birthdays = savedArr;
    };
  }

  ngOnInit() {

  }

}
