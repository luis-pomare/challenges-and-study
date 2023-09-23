const fibonacciCalculator = (number, result = []) => {
  switch (number) {
    case 1:
      result.unshift(1);
      return result;
      break;
    case 2:
      result.unshift(1);
      return fibonacciCalculator((number - 1), result)
      break;
    default:
      if (number > 0) {
        return number
      }
  }
}

console.log(fibonacciCalculator(1));
console.log(fibonacciCalculator(2));
console.log(fibonacciCalculator(3));
console.log(fibonacciCalculator(4));
console.log(fibonacciCalculator(5));
console.log(fibonacciCalculator(6));
console.log(fibonacciCalculator(7));
console.log(fibonacciCalculator(8));
