const obj1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

const entries = Object.entries as <T>(o: T) => Entries<T>;

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

console.log(entries(obj1));

const keys = Object.keys as <T>(o: T) => Keys<T>;

type Keys<T> = (keyof T)[];

console.log(keys(obj1));

const values = Object.values as <T>(o: T) => Values<T>;

type Values<T> = T[keyof T][];

console.log(values(obj1));

const obj2 = {
  a: '1',
  b: '2',
  c: '3',
  d: '3',
};

function filterByKey<T, K extends keyof T>(obj: T, findKey: K): Entries<T> {
  return entries(obj) //
    .filter(([key]) => key === findKey);
}

console.log(filterByKey(obj2, 'a'));

function filterByValue<T, K extends keyof T>(
  obj: T,
  findValue: T[K]
): Entries<T> {
  return entries(obj) //
    .filter(([_, value]) => value === findValue);
}

console.log(filterByValue(obj2, '3'));
