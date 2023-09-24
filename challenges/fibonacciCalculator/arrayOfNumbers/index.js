const numberHelper = (number, memo = {}) => {
  if (number in memo) return memo[number]
  if (number <= 2) return 1;
  return memo[number] = numberHelper((number - 2), memo) + numberHelper((number - 1), memo);
}

const fibonacciCalculator = (number, result = []) => {
  switch (number) {
    case 1:
      result.unshift(1);
      return result;

    case 2:
      result.unshift(1);
      return fibonacciCalculator((number - 1), result)

    default:
      if (number > 0) {
        return numberHelper(number);
      }
      break;
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
