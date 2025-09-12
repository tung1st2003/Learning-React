const name = "Js";
const price = 1200;

const courses = {
  name,
  price,
  getname() {
    return name;
  },
};
console.log(courses.getname());

const fieldName = "name";
const fieldPrice = "price";
const courses2 = {
  [fieldName]: "Js",
  [fieldPrice]: "1200",
};

console.log(courses2);

function arrToObj(arr) {
  const results = arr.reduce((acc, arr) => {
    const [key, value] = arr;
    acc[key] = value;
    return acc;
  }, {});
}

const obj1 = arrToObj([
  ["name", "Son Dang"],
  ["age", 21],
  ["address", "Ha Noi"],
]);
console.log(obj1);
