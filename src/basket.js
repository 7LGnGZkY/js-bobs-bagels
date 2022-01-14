class Basket {
  constructor() {
    this.basket = [];
    this.basketSize = 3;
    this.menu = [
      {
        type: "hummus",
        price: 3.0,
      },
      {
        type: "tomato",
        price: 3.5,
      },
      {
        type: "plain",
        price: 2.5,
      },
    ];
  }

  addToBasket(type, price) {
    if (this.basket.length < this.basketSize) {
      const item = {
        id: this.basket.length + 1,
        type: type,
        price: price,
      };
      this.basket.push(item);
    }
    return "Max basket size reached";
  }

  removeFromBasket(id) {
    for (let i = 0; i < this.basket.length; i++) {
      if (this.basket[i].id === id) {
        this.basket.splice(i, 1);
      }
    }
    return "No item found";
  }

  getPrice(product) {}

  displayBasket() {
    return this.basket;
  }

  
}

module.exports = Basket;
