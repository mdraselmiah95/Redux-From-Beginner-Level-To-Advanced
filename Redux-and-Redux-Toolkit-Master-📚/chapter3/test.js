function* generator() {
  yield 1;
  yield 3;
  yield 4;
  yield 5;
}

const gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
