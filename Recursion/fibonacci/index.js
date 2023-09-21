const fibonacciCalculator = (number) => {
  if (number <= 2) return 1;
  return fibonacciCalculator(number - 2) + fibonacciCalculator(number - 1);
}

console.log(fibonacciCalculator(1));
console.log(fibonacciCalculator(2));
console.log(fibonacciCalculator(3));
console.log(fibonacciCalculator(4));
console.log(fibonacciCalculator(5));
console.log(fibonacciCalculator(6));
console.log(fibonacciCalculator(7));
console.log(fibonacciCalculator(8));
console.log(fibonacciCalculator(9));
