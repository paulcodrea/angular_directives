import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})

export class OrderListComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {
  }

  @Input() 
  ordersArray: Array<any>;

  @Output()
  removeEvent = new EventEmitter();

  handleClick(idx: number){
    this.removeEvent.emit({
      index: idx
    })
  }

}
