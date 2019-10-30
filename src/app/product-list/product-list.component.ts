import { Component } from '@angular/core';

import { products } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(
    private cartService: CartService
  ){}

  share() {
    window.alert('The product has been shared!');
  }

  addToCart(product){
    window.alert("added to cart")
    this.cartService.addToCart(product)
  }

  onNotify() {
    window.alert("You will be notifized captain");
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/