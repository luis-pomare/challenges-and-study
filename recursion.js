function basicRecursion(number, iteration = 0) {
  console.log(iteration);
  if (iteration === number) return;
  basicRecursion(number, iteration + 1);
}

basicRecursion(5);
