import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
   
   `
   .custom{
    color:red;
    margin-bottom:1rem;

   }
   .users ul{
    border:2px solid black;
    border-radius:20px;

   }
   .users li{

    list-style:none;
    font-weight:bold;
    padding:5px;
    border-bottom:1px solid green;
    color:brown;

   }
    
    
    `

    
  ]
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
