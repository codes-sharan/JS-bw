const func3 = () => {
  console.log("I am in func3");
};

const func1 = () => {
  // setTimeout()
  console.log("I am in func1");

  // clouser
  const func2 = (input) => {
    console.log("I am in func2. Input is: ", input);
  };
  func2(1);
  return func2;
};

// synchronous
let result = func1();
result(123); // func2()
// func2(res1)

func3();

// callback
const fun1 = (cb) => {
  console.log("I am fun1.");
  cb();
};

const fun2 = () => {
  console.log("I am fun2.");
};

const fun3 = () => {
  console.log("I am fun3.");
};

fun1(() => {
  console.log("I am cb for fun1");
});

fun3();

// fs.writeFile("","", (err, bytes) => {
//     //
// })
