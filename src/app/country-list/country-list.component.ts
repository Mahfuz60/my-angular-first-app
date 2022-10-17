import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h1 class="country">
    Country List
    </h1>
    <div class="para">
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quasi optio. Fugiat amet sint maiores excepturi consectetur. Minima, placeat ipsam? Quasi recusandae id consequatur aliquam quos vel nihil odit voluptate molestiae autem cum, blanditiis veritatis voluptatum excepturi. Nisi deserunt, esse laboriosam tempore alias tenetur, quibusdam quas est dolor neque totam!</p>
    </div>
  `,
  styles: [
    `
    .country{
      color:green;
      font-weight:bold;
      margin-top:10px;
    }
    .para{
      border:2px solid black;
      border-radius:40px;
      padding:20px;
      background-color:#9b32a8;
       }
      .para p{
        font-weight:500;
        font-style:italic;
        color:#C6C8C6; 
       }
    
    `
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
