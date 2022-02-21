var Script = require("../src/script.js");
var scriptObj = new Script();
var chai = require("chai");
var expect = chai.expect;

describe("Test suit",function() {
    it("Test the add method",function() {
        expect(scriptObj.add(1, 2)).to.be.equal(3);
    });
});

