const numberHelper = (number, memo = {}) => {
  if (number in memo) return memo[number]
  if (number <= 2) return 1;
  return memo[number] = numberHelper((number - 2), memo) + numberHelper((number - 1), memo);
}

const fibonacciCalculator = (number, result = []) => {
  for (let i = 1; i <= number; i += 1) {
    result.push(numberHelper(i))
  }
  return result
}

console.log(fibonacciCalculator(70));
