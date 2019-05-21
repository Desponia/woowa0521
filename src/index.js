const taskA = cb => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
};

const taskB = r => {
  console.log("b > ", r);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200);
    }, 1000);
  });
};

const p1 = taskA();
const p2 = taskB();

Promise.all([p1, p2]).then(r => console.log(r));

// p.then(r => taskB(r))
//   .then(x => console.log(x))
//   .catch(err => console.err("e=>", err));

// console.log(p);
