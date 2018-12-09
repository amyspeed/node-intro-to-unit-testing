const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe(fizzBuzzer, function() {
    it('should return "fizzbuzz" for multiples of 15', function() {
        [15, 60, 90].forEach(function(input){
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });
    
    it('should return "buzz" for multiples of 5', function(){
        [5, 10, 20].forEach(function(input){
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });

    it('should return "fizz" for multiples of 3', function() {
        [3, 6, 18].forEach(function(input){
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });

    it('Should return a number if not a multiple of 3 or 5', function() {
        [1, 2, 7, 11].forEach(function(input){
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });
        it('should raise error if input is not a number', function(){
            const badInputs = ['a', false, function(){}];
            badInputs.forEach(function(input) {
                expect(function() {
                    fizzBuzzer(input);
                }).to.throw(Error);
            });
    
    });
});