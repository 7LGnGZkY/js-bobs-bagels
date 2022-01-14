const Basket = require("../src/basket.js");

describe("Basket", () => {
  let basket;

  beforeEach(() => {
    basket = new Basket();
  });

  it("Add bagel to basket", () => {
    const expected = [
      {
        id: 1,
        type: "hummus",
        price: 3.0,
      },
    ];

    const result = basket.addToBasket(1, "hummus", 3.0);
    expect(result).toEqual(expected);
  });
});

it("Add more than one bagel to basket", () => {
  const expected = [
    {
      id: 1,
      type: "hummus",
      price: 3.0,
    },
    {
      id: 2,
      type: "tomato",
      price: 3.5,
    },
    {
      id: 3,
      type: "plain",
      price: 2.5,
    },
  ];

  basket.addToBasket(1, "hummus", 3.0);
  const result = basket.addToBasket(1, "tomato", 3.5);
  expect(result).toEqual(expected);
});
