import * as themeCart from '@shopify/theme-cart';

export default class Cart {
    constructor() {
        this.cart = window.ehs.state.cart || {};
        this.initialized = false
    }

    addItem(...args) {
        return themeCart
            .addItem(...args)
            .then(item => {
                console.log(
                  `An item with a quantity of was added to your cart:`,
                  item
                );
                return themeCart.getState().then((cart) => ({ cart, item }));
            })
            .then(obj => {
                return obj;
            })
            .catch((e) => {
                return e.json().then((error) => {
                  alert(`Cannot add item. ${error.description}`);
                });
            })
    }

    removeItem(...args) {
        const [key] = args;
        const item = this.cart.items.filter((i) => i.key === key)[0];
        const index = this.cart.items.indexOf(item);

        if (!item) {
            return Promise.reject(new Error('Item not in cart.'));
        }

        return themeCart.removeItem(key).then((state) => {
            console.log('Item Removed')
            // this.removedItems.push({
            //     index,
            //     item,
            // });
            //this._updateState(state);

            // window.setTimeout(() => {
            //     this.removedItems = this.removedItems.filter((obj) => obj.item.key !== item.key);
            //     this.mergedCurrentAndRemovedItems = this.getMergedCurrentAndRemovedItems();
            // }, 5000);
            return state;
        });
    }

    updateItem(...args) {
        // if quantity equals 0, call removeItem for undo functionality.
        if (args[1].quantity < 1) {
            return this.removeItem(args[0]);
        }

        return themeCart
            .updateItem(...args)
            .then((cart) => this._updateState(cart))
            .catch((e) => {
                return e.json().then((error) => {
                    alert(`Cannot update item. ${error.description}`);
                });
            });
    }

    clearItems() {
        themeCart.clearItems().then(state => {
            console.log(`Your cart is now empty.`);
          });
    }
}