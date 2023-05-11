const { filterFoodPrice } = require('./food');

// Case 1
const filteredFood = filterFoodPrice(food, 12, 40);
console.assert(filteredFood.length === 3, "Filtered array length should be 3");

// Case 2
console.assert(
    filteredFood.some(element => element.kind === 'pepper' && element.price === 27),
    "Filtered array should contain object { kind: 'pepper', price: 27 }"
);

// Case 3
console.assert(
    filteredFood.some(element => element.kind === 'bred' && element.price === 16),
    "Filtered array should contain object { kind: 'bred', price: 16 }"
);

console.assert(
    filteredFood.some(element => element.kind === 'pepper' && element.price === 27),
    "Filtered array should contain object { kind: 'pepper', price: 27 }"
);

console.assert(
    filteredFood.some(element => element.kind === 'banana' && element.price === 32),
    "Filtered array should contain object { kind: 'banana', price: 32 }"
);

// Case 4
console.assert(filteredFood[0].price > 12, "Price of the first element should be greater than 12");

// Case 5
console.assert(filteredFood[2].price < 40, "Price of the third element should be less than 40");

// Case 6
console.assert(
    !filteredFood.some(element => element.kind === 'lemon' && element.price === 50),
    "Filtered array should not contain object { kind: 'lemon', price: 50 }"
);

// Case 7
const filteredFoodEmpty = filterFoodPrice([], 10, 20);
console.assert(filteredFoodEmpty.length === 0, "Filtered array length should be 0");
