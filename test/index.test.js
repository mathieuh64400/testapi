const assert =require('assert');
const addFn =require("../index");
describe('testAdd',function(){
    it('should return 10',function(){
         assert.equal(addFn.add(4,6),11)  ;
    })
 
})