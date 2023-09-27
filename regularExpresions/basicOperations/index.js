const reghex = (userInput) => {
  const pattern = /mcv/
  return pattern.test(userInput)
}

console.log(reghex('mcvs'));
