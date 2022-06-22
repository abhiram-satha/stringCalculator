const stringCalculator = (stringInput = 0) => {
  // stringInput = stringInput.toLowerCase().replace(/[ *_#]/g, '');
  if (stringInput === 0) {
    return 0;
  }

  const splitStringInput = stringInput.split(",");
  console.log(splitStringInput);
  let calculator = 0;
  let negativeStatement = "Negatives not allowed, "
  for (let i = 0; i < splitStringInput.length; i++) {
    // console.log(typeof Number(splitStringInput[i]) === "number")
    if (Number(splitStringInput[i]) < 0) {
      negativeStatement += `${Number(splitStringInput[i])}, `
    }

    if (typeof Number(splitStringInput[i]) === "number") {
      calculator += Number(splitStringInput[i]);
    }
    const integers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (splitStringInput[i].length > 1) {
      for (let j = 0; j < splitStringInput[i].length; j++) {
        if (integers.includes(splitStringInput[i][j])) {
          console.log("num", Number(splitStringInput[i][j]));
          calculator += Number(splitStringInput[i][j]);
          // console.log(calculator);
        }
      }
      // console.log(('number',splitStringInput[i]).length)
    }
    // console.log("length",splitStringInput[i].length)
  }
  // console.log(calculator)
  if (negativeStatement.length > 22) {
    return negativeStatement
  }
  return calculator.toString();
};

module.exports = { stringCalculator };
