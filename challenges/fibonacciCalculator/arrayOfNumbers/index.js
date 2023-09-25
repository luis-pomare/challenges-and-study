const fibonacciCalculator = (number, memo = {}) => {
  if (number in memo) return memo[number]
  if (number <= 2) return 1;
  return memo[number] = fibonacciCalculator((number - 2), memo) + fibonacciCalculator((number - 1), memo);
}

const arrayOfNumbers = (number, counter = 1, result = []) => {
  if (counter === number) {
    result.push(fibonacciCalculator(number));
    return result
  }
  result.push(fibonacciCalculator(counter))
  return arrayOfNumbers(number, counter + 1, result)
}

console.log(arrayOfNumbers(70));
