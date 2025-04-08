import { expect } from "chai";
import {validateEmailDomain} from "../functions.js";
function TestEmailDomain(Test_email,expected){
    describe("Test Suite", function () {
        it("Test check for valid email", function () {
            console.log(`${Test_email} should return ${expected} for being a valid email domain`)
            expect(validateEmailDomain(Test_email)).to.equal(expected)
        });
    });
}

TestEmailDomain("name",false)
TestEmailDomain("name.com",true)
TestEmailDomain("name.co.uk",true)
TestEmailDomain("name.c",false)
TestEmailDomain("name.cc",true)
TestEmailDomain("name...",false)
TestEmailDomain("name.--",false)
TestEmailDomain("name.@@",false)
TestEmailDomain("name.io",true)