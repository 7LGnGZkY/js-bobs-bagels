const Basket = require("../src/basket.js");
describe("Basket", () => {
  let basket;
  const largeBasket = 10;

  beforeEach(() => {
    basket = new Basket();
  });

  it("Create new basket", () => {
    const expected = [];
    let newBasket = basket.newBasket();
    expect(newBasket).toEqual(expected);
  });

  it("Add items", () => {
    const expected = [
      { item: "plain", quantity: 1, price: 2.5 },
      { item: "hummus", quantity: 2, price: 3.0 },
    ];
    basket.addItem("plain", 1);
    basket.addItem("hummus", 2);
    let bagels = basket.newBasket();
    expect(bagels).toEqual(expected);
  });

  it("Remove items", () => {
    const expected = (this.basket = [
      { item: "hummus", quantity: 2, price: 3.0 },
    ]);
    basket.addItem("plain", 1);
    basket.addItem("hummus", 2);
    let removeItem = basket.removeItem("plain");
    expect(removeItem).toEqual(expected);
  });

  it("Warn basket full", () => {
    const expected = "Basket is full";
    basket.addItem("plain", 3);
    basket.addItem("hummus", 5);
    let warn = basket.basketCapacity();
    expect(warn).toEqual(expected);
  });

  it("Create large basket", () => {
    const expected = (this.basketSize = largeBasket);
    new Basket(largeBasket);
    let checkSize = this.basketSize;
    expect(checkSize).toEqual(expected);
  });

  it("Check item prices", () => {
    const expected = 3.0;
    basket.checkPrice("hummus");
    let checkPrice = basket.checkPrice("hummus");
    expect(checkPrice).toEqual(expected);
  });

  it("Warn remove invalid item", () => {
    const expected = "Item not found";
    basket.addItem("plain", 3);
    basket.addItem("hummus", 2);
    let warn = basket.removeItem("coconut", 7);
    expect(warn).toEqual(expected);
  });

  it("Favourite bagels", () => {
    const expected = [
      { item: "tomato", quantity: 1, price: 3.5 },
      { item: "tomato", quantity: 1, price: 3.5 },
      { item: "tomato", quantity: 1, price: 3.5 },
      { item: "tomato", quantity: 1, price: 3.5 },
      { item: "tomato", quantity: 1, price: 3.5 },
    ];
    basket.addItem("tomato", 1);
    basket.addItem("tomato", 1);
    basket.addItem("tomato", 1);
    basket.addItem("tomato", 1);
    basket.addItem("tomato", 1);
    let warn = basket.newBasket();
    expect(warn).toEqual(expected);
  });

  it("Basket total", () => {
    const expected = "Total: £26";

    basket.addItem("tomato", 5);
    basket.addItem("plain", 1);
    basket.addItem("hummus", 2);
    let total = basket.basketTotal();
    expect(total).toEqual(expected);
  });
});
