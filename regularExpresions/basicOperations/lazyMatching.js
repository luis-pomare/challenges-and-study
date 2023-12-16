const reghex = (userInput) => {
  const pattern = /mcv/
  return userInput.match(pattern)
}

console.log(reghex('mcvs'));
