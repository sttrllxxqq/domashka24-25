// 24

let totalBalance = 0;
let phoneNumbers = [];

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  const balance = parseFloat(user.balance.replace(/[^0-9.-]+/g,""));

  if (balance > 2000) {
    phoneNumbers.push(user.phone);
  }

  totalBalance += balance;
}

console.log("Телефонні номери користувачів з балансом більше 2000 доларів:");
console.log(phoneNumbers);

console.log("Сума всіх балансів користувачів:");
console.log(totalBalance.toFixed(2));

// 25

function convert(obj) {
  const newObj = {
    x: obj.x,
    y: obj.y,
    z: obj.inner.z,
    k: obj.foo2.k,
    p: obj.foo2.p
  };
  return newObj;
}

const obj = {
  x: 10,
  y: 20,
  inner: { x: 20, z: 30 },
  foo2: { k: 23, p: 13 }
};

const newObj = convert(obj);
console.log(newObj);