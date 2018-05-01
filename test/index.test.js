'use strict'; /* global describe, it, before */

var should = require('should');
var convertNumberToString = require('..');


describe('convertNumberToString', function() {
  describe('convertNumberToString(n, { lang: \'persian\', ... })', function() {
    before(function() {
      
    });

    it('چیزی اشتباه رفت', function() {
      should.exist(convertNumberToString);
      convertNumberToString.should.be.instanceof(Function);
    });

    it('اگر اشتباه تایپ شود', function() {
      convertNumberToString('asdfasdfasdf').should.equal('صفر');
      convertNumberToString('0.as').should.equal('صفر');
      convertNumberToString('0.123').should.equal('صفر');
      convertNumberToString('0.8').should.equal('صفر');
      convertNumberToString('2.8').should.equal('صفر');
      convertNumberToString('asdf.8').should.equal('صفر');
      convertNumberToString('120391938123..').should.equal('صفر');
      convertNumberToString('1000000000.123').should.equal('صفر');
      convertNumberToString('1/3').should.equal('صفر');
      convertNumberToString(1/3).should.equal('صفر');
      convertNumberToString('1/2').should.equal('صفر');
      convertNumberToString('1.123/2').should.equal('صفر');
    });

    it('correctly converts numbers < 10', function() {
      convertNumberToString(1000000000).should.equal('یک میلیارد');
      convertNumberToString("1000000000").should.equal('یک میلیارد');
      convertNumberToString(3).should.equal('سه');
      convertNumberToString(8).should.equal('هشت');
    });

    it('correctly converts numbers < 20', function() {
      convertNumberToString(13).should.equal('سیزده');
      convertNumberToString(19).should.equal('نوزده');
    });

    it('correctly converts numbers < 100', function() {
      convertNumberToString(20).should.equal('بیست');
      convertNumberToString(25).should.equal('بیستو پنج');
    });

    it('correctly converts numbers < 1000', function() {
      convertNumberToString(200).should.equal('دویست');
      convertNumberToString(242).should.equal('دویست و چهل و دو');
      
    });

  });
});
