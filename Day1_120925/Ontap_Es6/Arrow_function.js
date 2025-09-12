const logger = function (log) {
  console.log("Message");
};
logger();

const logger2 = (log) => {
  console.log("Message2");
};
logger2();

const sum = (a, b) => a + b;
console.log(sum(2, 3));

const sum2 = (a, b) => ({ a: a, b: b });
console.log(sum2(4, 5));
