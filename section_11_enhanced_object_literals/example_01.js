function createBookShop(inventory) {
  return {
    //invetory: inventory
    inventory,
    //inventoryValue: function() {
    inventoryValue() {
      return this.inventory.reduce((acc, cur) => acc + cur.price, 0);
    },
    //priceForTitle: function(title) {
    priceForTitle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: 'HP', price: 10 },
  { title: 'LOTR', price: 20 },
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('LOTR'));
