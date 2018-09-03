function logAndReturn<T>(thing: T): T {
  console.log(thing);
  return thing;
}

let stringLog = logAndReturn<string>("string log");

let numberLog = logAndReturn<number>(500);
