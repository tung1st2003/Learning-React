const array = ["JS", "PHP", "Ruby"];
const [a, b, c] = array;
console.log(a, b);

const array2 = ["JS2", "PHP2", "Ruby2"];
const [d, ...rest] = array2;
console.log(rest);

// const courses = {
//   name: "JS",
//   price: "1200",
// };

// const { name, ...rest2 } = courses;
// console.log(name);
// console.log(rest2);

// const courses = {
//   name: "JS",
//   price: "1500",
//   children: {
//     name: "JS2",
//   },
// };
// const {
//   name: dadName,
//   children: { name },
// } = courses;
// console.log(dadName);
// console.log(name);

const courses = {
  name: "JS",
  price: 123456,
};
const { name, description = "Mo ta" } = courses;
console.log(description);
console.log(courses);
