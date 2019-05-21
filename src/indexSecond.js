function* foo() {
  // yield 10;
  // yield 20;
  // yield 30;
  yield* [1, 2, 3];

  let num = 0;
  while (true) {
    const r = yield ++num;
    console.log("r =>", r);
  }
  // return 100;
}

const result = foo();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next("A"));
console.log(result.next("B"));
