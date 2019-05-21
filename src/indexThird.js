const foo = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
};

// async function main() {
//   const result = await foo();
//   console.log(result);
// }
// main();

// to generator

function* main() {
  const result = yield foo();
  console.log(result);
}

const it = main();
it.next().value.then(r => it.next(r));
