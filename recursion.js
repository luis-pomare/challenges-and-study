function basicRecursion(number) {
  let couter = 0;
  function recursionHelper() {
    console.log(couter);
    if (couter === number) return;
    couter += 1;
    recursionHelper();
  }
  recursionHelper();
}

basicRecursion(15);
