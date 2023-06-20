import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {
buttonFlag: any;
admin: any;
username: any;
user: any;

  constructor() { }

  ngOnInit(): void {
  }

}
