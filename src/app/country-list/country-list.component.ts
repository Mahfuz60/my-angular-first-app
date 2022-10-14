import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h1 class="country">
    Country List
    </h1>
  `,
  styles: [
    `
    .country{
      color:green;
      font-weight:bold;
      margin-top:10px;
    }
    
    `
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
