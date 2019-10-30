import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  getTotal(){
    let sum = 0;
    for (let item of this.items){
      sum = sum + item.price;
    }
    return sum;
  }

  clearCart(){
    this.items = this.cartService.clearCart();
  }
}