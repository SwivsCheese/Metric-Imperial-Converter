'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get(function (req, res) {
    // write code that will stop if bad thing is passed
    let input = req.query.input;
    // if input has more than 1 "/" say it's bad
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    if(!initNum && !initUnit){
      res.send("invalid number and unit");
      return
    };
    if(!initNum){
      res.send("invalid number");
      return
    };
    if(!initUnit){
      res.send("invalid unit");
      return
    };

    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let spellOutUnit = convertHandler.spellOutUnit(initUnit);
    let spellOutUnit2 = convertHandler.spellOutUnit(returnUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let string = convertHandler.getString(initNum, spellOutUnit, returnNum, spellOutUnit2);

    res.json({initNum, initUnit, returnNum, returnUnit, string: string});
  });
  

};
