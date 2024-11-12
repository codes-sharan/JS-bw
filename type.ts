interface UserInterface {
  getname();
}

abstract class Person {}

class UserClass extends Person implements UserInterface {
  // proptery
  name: string;
  email: string;

  getname() {}
}

const userClassObj: UserInterface = new UserClass();

interface CustomObj {
  name: string | null;
  email: string | null;
  dob?: Date | null;
}

const objs: CustomObj = {
  name: "",
  email: "",
};

type getUserType = {
  name: string;
  email: string;
};
function getUser(obj: getUserType): string {
  return "";
}

getUser({
  name: "",
  email: "",
});
