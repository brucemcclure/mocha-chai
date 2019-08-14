/* 
By default Moca is going to look for a folder called "test".
We want to mimic the folder structure within the test file. 
So if there is a users file in the app then there should be a users file in the test file.
*/

const assert = require('chai').assert;
const {mrPickles, addNumbers} = require('../app');

/* 
describe('fileName, function(){
    it('app should return "mr pickles"', function(){
        assert.equal(app(), 'mr pickles')
    })
}')
*/
describe('App', () => {
    
    describe('mrPickles()', ()=>{
        it('mrPickles should return hello', () =>{
            let result = mrPickles();
            assert.equal(result, 'mr pickles');
        });
        it('mrPickles should return type string', () => {
            let result = mrPickles();
            assert.typeOf(result, 'string')
        })
    });

    describe('addNumbers', ()=> {
        it('addNumbers should return a number', ()=>{
            let result = addNumbers(2, 3);
            assert.typeOf(result, 'number')
        })
    
        it('addNumbers should return a number', ()=>{
            let result = addNumbers(2, 3);
            assert.equal(result, 5)
        })
    
        it('addNumbers should be above 5', ()=>{
            let result = addNumbers(2, 5);
            assert.isAbove(result, )
        })
    })
    

});