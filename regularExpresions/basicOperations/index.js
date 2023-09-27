const reghex = (userInput) => {
  const pattern = /mcvs/
  return userInput.match(pattern)
}

console.log(reghex('mcvs'));
