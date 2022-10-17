import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Angular App';
  data="Code step by learning from Angular";
  

  // function data
  getValue(){
    return "Hello Bangladesh,What day will going on!"
  };
  getName=()=>{
    alert("Hello function you are call me!")
  }
}
