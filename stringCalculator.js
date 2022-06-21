const stringCalculator = (stringInput = 0) => {
  if (stringInput === 0) {
    return 0;
  }

  const splitStringInput = stringInput.split(",")
  // console.log(splitStringInput)
  let calculator = 0;
  for(let i = 0; i < splitStringInput.length; i++) {
    // console.log(typeof Number(splitStringInput[i]) === "number")
    if (typeof Number(splitStringInput[i]) === "number") {
      calculator += Number(splitStringInput[i])
    }
  }
  // console.log(calculator)
  return calculator.toString();
}

module.exports = {stringCalculator};