import { Injectable } from "@angular/core";
import { ShoppingCartComponent } from "../restaurant-detail/shopping-cart/shopping-cart.component";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "../models/cart-item.model";

@Injectable()
export class OrderService {

    constructor(
        private cartService: ShoppingCartService
    ) { }

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removerItem(item)
      }
}