function* foo() {
  // yield 10;
  // yield 20;
  // yield 30;
  let num = 0;
  while (true) {
    yield ++num;
  }
  // return 100;
}

const result = foo();

console.log(result.next());
console.log(result.next());
console.log(result.next());
