//1. Использование операторов и условий:
let initData: number[] = Array.from({length: 100}, (_, index) => index + 1);
let results: number[] = [];

for (let i = 0; i < initData.length; i++) {
    let num = initData[i] + 2;
    if (num % 2 === 0) {
      results.push(num);
    }
  }

console.log('1. Использование операторов и условий:');
console.log(initData);
console.log(results);

//2. Создание нового массива:
let squareRootResults: number[] = [];

for (let i = 0; i < results.length; i++) {
    let sqrt = Math.sqrt(results[i]);
    squareRootResults.push(sqrt);
}
console.log('2. Создание нового массива:');
console.log(squareRootResults);

//3. Условия и вывод данных. Создайте условие, которое проверяет, есть ли в squareRootResults хотя бы одно число, большее 7. Если такое число есть, выведите его в консоль

let hasNumber = squareRootResults.some(num => num > 7);

console.log('3. Условия и вывод данных:');
console.log(hasNumber);

if (hasNumber) {
    console.log(squareRootResults.find(num => num > 7));
}

