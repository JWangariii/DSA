// hash tables have keys and values
// hashcode is also called index of array
// handle collision by seperate chaining(by creating a linked list or new array I.e a seperate data structure) or open addressing
// comlexity 0(n)

// creating a hash table
const priceList = new Map();

// also
let priceList = {};

// setting a value
priceList.set("apple", 5);

// getting values stored in the keys
priceList.get("apple");

// deleting items
priceList.delete("apple");

// getting number of items in hash table
priceList.size();

// removing everything in hash table
priceList.clear();
