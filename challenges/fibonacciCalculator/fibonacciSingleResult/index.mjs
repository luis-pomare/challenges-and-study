const fibonacciCalculator = (number, memo = {}) => {
  if (number in memo) return memo[number]
  if (number <= 2) return 1;
  return memo[number] = fibonacciCalculator((number - 2), memo) + fibonacciCalculator((number - 1), memo);
}

export default fibonacciCalculator;
