const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('convertHandler.getNum(input)', function(){

    test('whole number', function(done){

      let input = "4gal";
      assert.equal(convertHandler.getNum(input), 4);
      done();
    });

    test('decimal number', function(done){
      let input = "3.2mi";
      assert.equal(convertHandler.getNum(input), 3.2);
      done();
    });

    test('fractional number', function(done){
      let input = "3/2mi";
      assert.equal(convertHandler.getNum(input), 3/2);
      done();
    });

    test('decimal w fractional number', function(done){
      let input = "3.2/1.4mi";
      assert.equal(convertHandler.getNum(input), 3.2/1.4);
      done();
    });

    test('double-fraction number', function(done){
      let input = "3/2/2mi";
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });

    test('no number', function(done){
      let input = "mi";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite('convertHandler.getUnit(input)', function(){

    test('valid input unit', function(done){
      let input = ['gal', 'l', 'lbs', 'kg', 'mi', 'km', 'GAL', 'L', 'LBS', 'KG', 'MI', 'KM'];
      let output = ['gal', 'L', 'lbs', 'kg', 'mi', 'km', 'gal', 'L', 'lbs', 'kg', 'mi', 'km'];
      
      input.forEach(function(elem, index) {
        assert.equal(convertHandler.getUnit(elem), output[index]);
      });
      done()
    });
  

    test('invalid input unit', function(done){
      let input = "5gla";
      assert.equal(convertHandler.getUnit(input), undefined);
      done();
    });
  });
  
  suite('convertHandler.getReturnUnit(initUnit)', function(){

    test('valid return unit', function(done){
      let input = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
      let output = ['L', 'gal', 'kg', 'lbs', 'km', 'mi'];

      input.forEach((elem, index) => {
        assert.equal(convertHandler.getReturnUnit(elem), output[index]);
      });
      done();
    });
  });

  suite('convertHandler.spellOutUnit(unit)', function(){
  
    test('valid spell out input unit', function(done){
      let input = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
      let output = ['gallons', 'liters', 'pounds', 'kilograms', 'miles', 'kilometers'];
      input.forEach((elem, index) => {
        assert.equal(convertHandler.spellOutUnit(elem), output[index]);
      });
      done();
    });
  });

  suite('convertHandler.convert(initNum, initUnit)', function(){

    test('gal -> L', function(done){
      let input = [6, 'gal']
      let output = [22.71246]
      assert.equal(convertHandler.convert(input[0], input[1]), output);
      done();
    });

    test('L -> gal', function(done){
      let input = [22.71246, 'L']
      let output = [6]
      assert.equal(convertHandler.convert(input[0], input[1]), output);
      done();
    });

    test('lbs -> kg', function(done){
      let input = [6, 'lbs']
      let output = [2.72155]
      assert.equal(convertHandler.convert(input[0], input[1]), output);
      done();
    });

    test('kg -> lbs', function(done){
      let input = [2.72155, 'kg']
      let output = [6]
      assert.equal(convertHandler.convert(input[0], input[1]), output);
      done();
    });

    test('mi -> km', function(done){
      let input = [6, 'mi']
      let output = [9.65604]
      assert.equal(convertHandler.convert(input[0], input[1]), output);
      done();
    });

    test('km -> mi', function(done){
      let input = [9.65604, 'km']
      let output = [6]
      assert.equal(convertHandler.convert(input[0], input[1]), output);
      done();
    });
  });

});
