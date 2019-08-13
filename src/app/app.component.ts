import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
ordersArray: Array<any> = [
  {
    title: "Order 2255",
    text: "Order has not yet been delivered", 
    date: new Date(1988, 1, 15)
  },
  {
    title: "Order 4452",
    text: "Order has not yet been delivered", 
    date: new Date(2005, 12, 15)
  }, 
  {
    title: "Order 4889", 
    text: "Order has not been delivered", 
    date: new Date(1928, 3, 4)
  }, 
  {
    title: "Order 4889", 
    text: "Order was delivered", 
    date: new Date(1988, 6, 8)
  }
];

  show:boolean

  constructor(){
    this.show = true;

    setTimeout( () => {
      this.show = false;
    }, 5000 )
  }

  addFunction(){
    this.ordersArray.push({
      title: "Order #1234",
      text: "Order was registered", 
      date: new Date()
    });
  }

  // function to show or hide the list whenever you press the Toggle button
  toggleFunction($event){
    this.show = !this.show
    console.log($event)
  }

  removeOrder(orderIndex: number){
    this.ordersArray.splice(orderIndex, 1);
  }
}
