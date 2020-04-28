const validateShoppingList = (...items) => {
  if (items.find((e) => e === 'milk')) {
    return items;
  }
  return ['milk', ...items];
};

console.log(validateShoppingList('orange', 'bread', 'eggs'));
