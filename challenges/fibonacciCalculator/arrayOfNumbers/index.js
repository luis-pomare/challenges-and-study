const numberHelper = (number, memo = {}) => {
  if (number in memo) return memo[number]
  if (number <= 2) return 1;
  return memo[number] = numberHelper((number - 2), memo) + numberHelper((number - 1), memo);
}

const fibonacciCalculator = (number, counter = 1, result = []) => {
  if (counter === number) {
    result.push(numberHelper(number));
    return result
  }
  result.push(numberHelper(counter))
  return fibonacciCalculator(number, counter + 1, result)
}

console.log(fibonacciCalculator(70));
