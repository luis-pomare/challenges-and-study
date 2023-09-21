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

//This recusive solution works very well in small cuantities but in bigger ones it is going to freze
//because it has a time complexity of o(2^n)
