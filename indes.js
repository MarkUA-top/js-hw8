// TASK 1
// const friendList = ["mango", "poly", "kiwi", "ayax"]
// const friends = friendList.join(", ")
// console.log(friends)

// let result = "";
// for (let i = 0; i < friendList.length; i++) {
//   result += friendList[i];
//   if (i !== friendList.length - 1) {
//     result += ", ";
//   }
// }
// console.log(result);

// Task 2
let cards = ["a", "b", "c", "d"];

cards.splice(2, 2);
console.log(cards);

cards.splice(3, 0, "c.d");
console.log(cards);

cards.splice(1, 1, "idk");
console.log(cards);
