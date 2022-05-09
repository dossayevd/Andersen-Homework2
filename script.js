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
  const isValid =
    Array.isArray(arr) &&
    arr.every(Number) &&
    typeof int1 === 'number' &&
    typeof int2 === 'number';

  if (!isValid) {
    throw new Error('Ошибка!');
  }

  if (int1 < int2) {
    console.log(arr.slice(int1, int2));
  }

  if (int1 > int2) {
    console.log(arr.slice(int2, int1));
  }
}

selectFromInterval([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 7);

/* 3 Задача */
const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    return {
      current: this.from - 1,
      last: this.to,
      next() {
        this.current += 1;
        return {
          done: this.current > this.last,
          value: this.current
        };
      }
    };
  }
};

const isValid =
  myIterable.from < myIterable.to &&
  typeof myIterable.from === 'number' &&
  typeof myIterable.to === 'number';

if (!isValid) {
  throw new Error('Ошибка!');
}

for (const num of myIterable) {
  console.log(num);
