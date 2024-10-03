const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');
const app = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  
  test('convert 10L using GET request', function(done){

    chai.request(server).get('/api/convert').query({input: '10L'}).end(function(err, res){
      assert.equal(res.body.initNum, 10);
      assert.equal(res.body.initUnit, 'L');
      assert.equal(res.body.returnNum, 2.64172);
      assert.equal(res.body.returnUnit, 'gal');
      done();
    });
  });

  test('convert 32g using GET request', function(done){

    chai.request(server).get('/api/convert').query({input: '32g'}).end(function(err, res){
      assert.equal(res.body.initUnit, undefined);
      done();
    });
  });

  test('convert 3/7.2/4kg using GET request', function(done){

    chai.request(server).get('/api/convert').query({input: '3/7.2/4kg'}).end(function(err, res){
      assert.equal(res.body.initNum, undefined);
      done();
    });
  });

  test('convert 3/7.2kilomegagram using GET request', function(done){

    chai.request(server).get('/api/convert').query({input: '3/7.2kilomegagrams'}).end(function(err, res){
      assert.equal(res.body.initUnit, undefined);
      done();
    });
  });

  test('convert 1kg using GET request', function(done){

    chai.request(server).get('/api/convert').query({input: 'kg'}).end(function(err, res){
      assert.equal(res.body.initNum, 1);
      assert.equal(res.body.initUnit, 'kg');
      assert.equal(res.body.returnNum, 2.20462);
      assert.equal(res.body.returnUnit, 'lbs');
      done();
    });
  });
});
