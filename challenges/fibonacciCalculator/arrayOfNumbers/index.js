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

    default:
      if (number > 0) {
        result.unshift(numberHelper(number));
        return fibonacciCalculator((number - 1), result)
      }
      break;
  }
}

console.log(fibonacciCalculator(7700));
