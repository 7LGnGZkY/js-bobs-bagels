const MENU = require("./menu.js");
let basket = 0;

class Basket {
  constructor(size = basket) {
    this.basket = [];
    this.basketSize = size;
  }
  newBasket() {
    return this.basket;
  }
  addItem(name, quantity) {
    const menu = MENU.newMenu();
    for (const items in menu) {
      if (items == name) {
        const contents = {
          item: name,
          quantity: quantity,
          price: menu[items],
        };
        this.basket.push(contents);
      }
    }
  }

  removeItem(name) {
    for (let i = 0; i < this.basket.length; i++)
      if (this.basket[i].item === name) {
        this.basket.splice(i, 1);
        return this.basket;
      } else if (this.basket[i].item !== name) return "Item not found";
  }

  checkPrice(name) {
    const menu = MENU.newMenu();
    for (const items in menu)
      if (name == items) {
        return menu[items];
      }
  }

  basketCapacity() {
    const capacity = this.basket.reduce((total, quantity) => {
      return total + quantity.quantity;
    }, 0);
    if (capacity > this.basketSize) {
      return "Basket is full";
    }
  }

  basketTotal() {
    let item = [];
    for (let i = 0; i < this.basket.length; i++) {
      item.push(this.basket[i].price * this.basket[i].quantity);
    }
    const total = item.reduce((total, quantity) => {
      return total + quantity;
    }, 0);
    return ("Total: " + "£" + total );
  }
}

module.exports = Basket;
