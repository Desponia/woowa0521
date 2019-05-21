const foo = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
};

async function main() {
  const result = await foo();
  console.log(result);
}
main();
