const func2 = () => {
  setTimeout(() => {
    console.log("I am in func2");
  }, 1000);
};

const func1 = () => {
  setTimeout(() => {
    console.log("I am in func1");
  }, 3000);
};

// REPL
// Read Evaluate Process Loop

func1(); // after 3 sec
func2(); // after 1 sec

console.log("I am another statement");
console.log("I am last line");

// loop array
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbs.map((value) => {
  sum += value;
  // return
});

sum = 0;
numbs.forEach((val) => {
  sum += val;
  // no return
});

// let evens = [];
// numbs.forEach((val) => {
//     if(val%2 === 0) {
//         evens.push(val);
//     }
// })

let evens = numbs.filter((val) => {
  return val % 2 === 0;
});

sum = 0;
sum = numbs.reduce((prev, curr, ind) => {
  console.log({ prev, curr, ind });
  sum += curr;
  return sum;
}, 0);

// event

const jsFunc = (evet) => {};
{
  /* <button click="jsFunc" /> */
}

// library
// fs.write("", '', (error, bytesWrite) => {})
// fs.read("", "", (error, data) => {})
// fs.mkdir("", {}, (error))

// mongoose.connect("", "", (error, client))

// promise
