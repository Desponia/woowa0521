function* foo() {
  yield 10;
  yield;
  return 100;
}

const result = foo();

console.log(result.next());
console.log(result.next());
console.log(result.next());
