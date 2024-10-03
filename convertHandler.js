function numAndString(input){
  let num = input.match(/[.\d\/]+/g) || ["1"];
  let string = input.match(/[a-zA-Z]+/g)[0];

  return [num[0], string];
};

function ConvertHandler() {

  // CORRECT JAVASCRIPT'S AWFUL MATH

  this.getNum = function(input) {
    // 1. get number
    // 2. detect if there are fractions with a regex
    // 3. if so, do math
    let numInput = numAndString(input)[0];
    let newnum = numInput.split(/[/]/);

    if(newnum.length > 2){
      return undefined
    }

    if(newnum.length > 1){
      // this is saying "HEY THERE'S A FRACTION"
      // decimals can divide each other in this as well...
      let num1 = newnum[0];
      let num2 = newnum[1];
      numInput = parseFloat(num1) / parseFloat(num2);
      console.log(numInput);
    };
    return Number(numInput);
  };
  
  this.getUnit = function(input) {
    let initUnit = numAndString(input)[1].toLowerCase()
    let returnUnit
    switch(initUnit){
      case "gal": 
        returnUnit = "gal"
        break
      case "l":
        returnUnit = "L"
        break
      case "lbs":
        returnUnit = "lbs"
        break
      case "kg":
        returnUnit = "kg"
        break
      case "mi":
        returnUnit = "mi"
        break
      case "km":
        returnUnit = "km"
        break
      default:
        return undefined;
    }
    
    return returnUnit;
  };
  
  this.getReturnUnit = function(initUnit) {
    //gal <-> l
    //lbs <-> kg
    //mi  <-> km
    let returnUnit
    switch(initUnit){
      case "gal": 
        returnUnit = "L"
        break
      case "L":
        returnUnit = "gal"
        break
      case "lbs":
        returnUnit = "kg"
        break
      case "kg":
        returnUnit = "lbs"
        break
      case "mi":
        returnUnit = "km"
        break
      case "km":
        returnUnit = "mi"
        break
      default:
        return undefined;
    }
    
    return returnUnit;
  };

  this.spellOutUnit = function(unit) {
    let returnUnit
    switch(unit){
      case "gal": 
        returnUnit = "gallons"
        break
      case "L":
        returnUnit = "liters"
        break
      case "lbs":
        returnUnit = "pounds"
        break
      case "kg":
        returnUnit = "kilograms"
        break
      case "mi":
        returnUnit = "miles"
        break
      case "km":
        returnUnit = "kilometers"
        break
    }
    console.log(returnUnit);
    
    return returnUnit;
  };
  
  this.convert = function(initNum, initUnit) { // entered num, entered unit
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let returnUnit
    switch(initUnit){
      case "gal": 
        returnUnit = initNum * galToL;
        break
      case "L":
        returnUnit = initNum / galToL;
        break
      case "lbs":
        returnUnit = initNum * lbsToKg;
        break
      case "kg":
        returnUnit = initNum / lbsToKg;
        break
      case "mi":
        returnUnit = initNum * miToKm;
        break
      case "km":
        returnUnit = initNum / miToKm;
        break
      default:
        returnUnit = undefined;
    }
    console.log(returnUnit);
    return parseFloat(returnUnit.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) { //other num, opposite unit
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
