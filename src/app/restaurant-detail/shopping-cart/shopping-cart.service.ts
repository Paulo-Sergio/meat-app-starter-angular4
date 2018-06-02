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
            foundItem.quantity = foundItem.quantity + 1
        } else {
            this.items.push(new CartItem(item))
        }
    }

    removerItem(item: any) {
        let indice = this.items.indexOf(item)
        this.items.splice(indice, 1)
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }

}