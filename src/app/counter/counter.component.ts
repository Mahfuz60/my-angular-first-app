import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

  count=0

  getCounter(type:string){
    // this.count++;
    type==='add'?this.count++:this.count--;

  }

  

}
