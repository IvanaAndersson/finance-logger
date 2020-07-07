// TypeScript infers the type when we declare a variable
const character = "ivana"; //type string
const age = 454; //type number
const isTrue = false;

const circumference = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circumference(5.4));

//arrays
const names = ["ivana", "rickard", "maiche"];
//we can only add strings to the array names
names.push("rose");

//objects
const ninja = {
  name: "maria",
  age: 20,
  belt: "black",
};

ninja.name = "ryu";
ninja.age = 40;
//we cannot add new properties to the objects

//explicit types
const characterName: string = "Ivana";
const ageOfCharacter: number = 30;
const isLoggedIn: boolean = false;

const anderssons: string[] = ["ivana", "rickard", "maiche"];

//union types
const uid: string | number = "123";

const mixedArray: (string | number)[] = [
  "ivana",
  30,
  "rickard",
  33,
  "maiche",
  3,
];

const ninjaObject: {
  name: string;
  age: number;
  beltColor: string;
} = { name: "ivana", age: 30, beltColor: "fkgjdgjkdf" };

//function type
let greet: Function;

greet = () => {
  console.log("hello world");
};

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c); //should be undefined, since it's an optional parameter
};

add(5, 10);

const subtract = (a: number, b: number): number => {
  return a - b;
};

//type Aliases
type StringOrNum = string | number;
type ObjectWithName = {
  name: string;
  uid: StringOrNum;
};

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(uid);
};

const greetAgain = (name: ObjectWithName) => {
  console.log(name);
};
