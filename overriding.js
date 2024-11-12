// parent class
class ClassOne {
  prop1; // undefined

  constructor(val1) {
    this.prop1 = val1;
    console.log("I am in ClassOne");
    console.log("Prop1: ", this.prop1);
  }

  test() {
    console.log("I am in parent Function");
  }
}

// child or derived
class ClassTwo extends ClassOne {
  prop2;

  static testdata = "Test value";

  constructor(val1, val2) {
    super(val1); /// super constructor
    this.prop2 = val2;
    console.log("I am in ClassTwo");
    // return undefined
    console.log("Prop2: ", this.prop2);
  }

  test(x) {
    super.test();
    console.log("I am in child class");
  }

  static getValue() {
    console.log("I am in static function", ClassTwo.testdata);
  }
}

class ClassThree extends ClassOne {}

const obj = new ClassTwo("Value for 1", "value for 2");
// I am in ClassOne or empty
console.log(obj.prop1);
console.log(ClassTwo.testdata);
obj.test("test"); //

const obj3 = new ClassThree("One arg");
obj3.test();

ClassTwo.getValue();
