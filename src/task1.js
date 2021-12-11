const obj = {
  data: [
    { name: 'John', email: 'john2@mail.com' },
    { name: 'John', email: 'john1@mail.com' },
    { name: 'Jane', email: 'jane@mail.com' },
  ],
};

const test = {
  condition: {
    include: [{ name: 'John' }],
    sort_by: ['email'],
  },
};

let prop;
for (let key in test.condition.include[0]) {
  prop = key;
}

const include_prop = test.condition.include[0][prop];
const sort_by_prop = test.condition.sort_by[0];

const result = obj.data
  .filter(o => o[prop] === include_prop)
  .sort((a, b) => (b[sort_by_prop] > a[sort_by_prop] ? -1 : 1));

const resultObj = { result };
console.log(resultObj);
