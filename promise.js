// const interval = setInterval(() => {
//     console.log("I am here")
// }, 1000)

// setTimeout(() => {
//     clearInterval(interval)
// }, 10000)

// Promise
// pending
// fullfilled/reject
// setllement

// object
const prom = () => {
  return new Promise((resolve, reject) => {
    resolve("I am resolve");
    // reject("I am a reject")
  });
};

// promise
// a. then-catch
// b. async-await

prom()
  .then((res) => {
    // console.log(res)    // I am resolve
    //
  })
  .catch((exception) => {
    // console.log(exception)
    //
  })
  .finally(() => {
    // console.log("I am always")
  });

// console.log("I am last line")

const func1 = () => {
  return new Promise((res, rej) => {
    let x = true;
    if (x) {
      res("I am resolve of func1");
    } else {
      rej("I am reject of func1");
    }
  });
};

const func2 = () => {
  return new Promise((res, rej) => {
    let x = true;
    if (x) {
      res("I am resolve of func2");
    } else {
      rej("I am reject of func2");
    }
  });
};

// nesting of promise
// func1()
//     .then((res1) => {
//         func2()
//             .then((res2) => {

//             })
//             .catch((exception) => {

//             })
//     })
//     .catch((exception) => {

//         })

// chain
// func1()
//     .then((res1) => {
//         console.log(res1)
//         return func2()
//     })
//     .then((res2) => {
//         console.log(res2)
//     })
//     .catch((exception) => {
//         console.log(exception)
//     })

const func3 = () => {
  return new Promise((res, rej) => {
    let x = true;
    if (x) {
      res("I am resolve of func3");
    } else {
      rej("I am reject of func3");
    }
  });
};

const func4 = async () => {
  // return "I am resolve of func4."
  throw "I am reject of func4";
};

const func5 = () => {
  return Promise.resolve("I am resolve of 5");
};

const func6 = () => {
  return Promise.reject("I am reject of 6");
};

const handler = async () => {
  try {
    let returnValue = await func4();
    console.log(returnValue);
  } catch (exception) {
    console.log(exception);
  }
};

// handler()

console.log("");
Promise.allSettled([func1(), func2(), func3(), func4(), func5()])
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
// Promise.allSettled()

const writeInFile = async () => {
  try {
    // await fs.write()
  } catch (exception) {}
};
