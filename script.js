/* 1 Задача */
const makeObjectDeepCopy = (obj) => {
  let copy = Object.assign({}, obj);

  Object.keys(copy).forEach(
    (key) =>
      (copy[key] =
        typeof obj[key] === 'object' ? makeObjectDeepCopy(obj[key]) : obj[key])
  );

  return Array.isArray(obj) && obj.length
    ? (copy.length = obj.length) && Array.from(copy)
    : Array.isArray(obj)
    ? Array.from(obj)
    : copy;
};

const MY_OBJECT = { name: 'JS', obj: { a: 1, b: 2 } };
const COPY_OF_OBJECT = makeObjectDeepCopy(MY_OBJECT);

console.log(MY_OBJECT, COPY_OF_OBJECT);

/* 2 Задача */
function selectFromInterval(arr, int1, int2) {
  if (!arr.every(Number)) {
    throw new Error('Ошибка!');
  } else if (!Array.isArray(arr)) {
    throw new Error('Ошибка!');
  } else if (typeof int1 !== 'number' || typeof int2 !== 'number') {
    throw new Error('Ошибка!');
  } else {
    if (int1 < int2) {
      console.log(arr.slice(int1, int2));
    } else {
      if (int1 > int2) {
        console.log(arr.slice(int2, int1));
      }
    }
  }
}

selectFromInterval([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 7);

/* 3 Задача */
const myIterable = { from: 1, to: 10 };

const conditions =
  myIterable.from > myIterable.to ||
  typeof myIterable.from !== 'number' ||
  typeof myIterable.to !== 'number';

if (conditions) {
  throw new Error('Ошибка');
}

for (let item = myIterable.from; item <= myIterable.to; item++) {
  console.log(item);
}
