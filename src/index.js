const foo = cb => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(100);
      reject("omg");
    }, 1000);
  });
};

const p = foo();

p.then(r => console.log(r), err => console.error(err));

console.log(p);
