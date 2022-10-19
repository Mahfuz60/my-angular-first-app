import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-statement',
  templateUrl: './conditional-statement.component.html',
  styleUrls: ['./conditional-statement.component.css']
})
export class ConditionalStatementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // if-else
  color='red';
  // switch 
  show="blue";

}
