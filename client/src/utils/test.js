function* myPipe() {
  let i = 0;
  console.log("sans yield")
  yield console.log("1er yield recnontré")
  yield console.log("yield2dans le console log")
  yield console.log(i+1, "yield 3 increment i")
}

var saga = myPipe();

console.log(saga.next());
console.log(saga.next());
