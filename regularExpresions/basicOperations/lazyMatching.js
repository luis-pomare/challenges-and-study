const reghex = (userInput) => {
  const pattern = /m.*?c/
  return userInput.match(pattern)
}

console.log(reghex('mpcvsmc'));
