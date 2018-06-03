import { CartItem } from "../../models/cart-item.model";
import { MenuItem } from "../../models/menu-item.model";

export class ShoppingCartService {

    items: CartItem[] = []

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
    }

    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }

    removerItem(item: any) {
        let indice = this.items.indexOf(item)
        this.items.splice(indice, 1)
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if (item.quantity === 0) {
            this.removerItem(item)
        }
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }

}