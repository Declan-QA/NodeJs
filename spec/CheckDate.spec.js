import { expect } from "chai";
import {validateDate} from "../functions.js";
function TestEmail(testfunc,Test_email,expected){
    describe("Test Suite", function () {
        it("Test check for valid date", function () {
            console.log(`${Test_email} should return ${expected} for being a valid email`)
            expect(testfunc(Test_email)).to.equal(expected)
        });
    });
}

TestEmail(validateDate,"2023-02-25",true)
TestEmail(validateDate,"2024-02-25",true)
TestEmail(validateDate,"2024-03-06",true)
TestEmail(validateDate,"2025-05-08",false)
TestEmail(validateDate,"2026-04-02",false)
TestEmail(validateDate,"2026-07-06",false)
