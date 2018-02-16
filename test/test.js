
var assert = require("chai").assert;
var luhn = require('../luhn');
var assert = require('assert');

describe('#compareArray(Original, Comparitor)', function() {
    it('Returns true if two arrays contain all the same values', function() {
        var a = [1,2,3,4,5];
        var b = [1,2,3,4,5];
        assert.equal(luhn.compareArray(a,b), true);
    });
}); 
describe('#convertCardNumberToArray(cardnumber)', function() {
    it('It should return an array of the number passed', function() {
    	var num = 12345;
    	var numArray = [1,2,3,4,5];
        assert.equal(luhn.compareArray(luhn.convertCardNumberToArray(number), numArray), true);
    });

});
describe('#calculateLundArray(cardNumberArray)', function() {
    it('It should return a Luhn array of the number passed', function() {
        var openArr = [1,2,3,4,5];
        var LuhnArr = [1,4,3,8,5];
        assert.equal(luhn.compareArray(luhn.calculateLundArray(openArr), LuhnArr), true);
    });

});

