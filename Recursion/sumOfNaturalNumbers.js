function sumOfNaturalNumbers(number) {
  let counter = 0;
  let result = 0;

  function recursionHelper() {
    if (counter === number) return;
    counter += 1;
    result += counter;
    recursionHelper();
  }

  recursionHelper();

  return result;
}

export default sumOfNaturalNumbers;
