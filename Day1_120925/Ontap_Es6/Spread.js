const array = ["JS", "PHP", "Ruby"];
const array2 = ["JS2", "PHP2"];
const array3 = [...array2, ...array];
console.log(array3);
const obj1 = {
  name: "JS",
};
const obj2 = {
  price: 1200,
};
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
