import fibonacciCalculator from "../fibonacciSingleResult/index.mjs";


const arrayOfNumbers = (number, counter = 1, result = []) => {
  if (counter === number) {
    result.push(fibonacciCalculator(number));
    return result
  }
  result.push(fibonacciCalculator(counter))
  return arrayOfNumbers(number, counter + 1, result)
}

console.log(arrayOfNumbers(12));
