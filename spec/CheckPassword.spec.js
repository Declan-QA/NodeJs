import { expect } from "chai";
import {Lencheck,Uppercheck,Lowercheck,SpecialCheck,Numcheck,paswordcheck} from "../functions.js";

function TestPasswordFuncs(testfunc,test_input,expected,functionname){
    describe("Test Suite", function () {
        it(`Testing password function ${functionname}`, function () {
            console.log(`${test_input} should return ${expected} for ${functionname}`)
            expect(testfunc(test_input)).to.contain(expected)
        });
    });
}

function TestPassword(test_input,expected){
    describe("Test Suite", function () {
        it(`Testing password validation function`, function () {
            console.log(`${test_input} should return ${expected} `)
            expect(paswordcheck(test_input)).to.eql(expected)
        });
    });
}


TestPasswordFuncs(Lencheck,"Glare21?",false,"Lencheck")
TestPasswordFuncs(Lencheck,"Glares21?",true,"Lencheck")
TestPasswordFuncs(Lencheck,"",false,"Lencheck")

TestPasswordFuncs(Uppercheck,"g",false,"Uppercheck")
TestPasswordFuncs(Uppercheck,"G",true,"Uppercheck")
TestPasswordFuncs(Uppercheck,"9",false,"Uppercheck")
TestPasswordFuncs(Uppercheck,"!",false,"Uppercheck")
TestPasswordFuncs(Uppercheck,"@",false,"Uppercheck")

TestPasswordFuncs(Lowercheck,"g",true,"Lowercheck")
TestPasswordFuncs(Lowercheck,"G",false,"Lowercheck")
TestPasswordFuncs(Lowercheck,"9",false,"Lowercheck")
TestPasswordFuncs(Lowercheck,"!",false,"Lowercheck")
TestPasswordFuncs(Lowercheck,"@",false,"Lowercheck")

TestPasswordFuncs(SpecialCheck,"g",false,"SpecialCheck")
TestPasswordFuncs(SpecialCheck,"G",false,"SpecialCheck")
TestPasswordFuncs(SpecialCheck,"9",false,"SpecialCheck")
TestPasswordFuncs(SpecialCheck,"!",true,"SpecialCheck")
TestPasswordFuncs(SpecialCheck,"@",true,"SpecialCheck")

TestPasswordFuncs(Numcheck,"g",false,"Numcheck")
TestPasswordFuncs(Numcheck,"G",false,"Numcheck")
TestPasswordFuncs(Numcheck,"9",true,"Numcheck")
TestPasswordFuncs(Numcheck,"!",false,"Numcheck")
TestPasswordFuncs(Numcheck,"@",false,"Numcheck")


TestPassword("G",['Must be 9 Characters or more in length','Has no Lowercase Letters','Has no Special Characters','Has no Numbers'])
TestPassword("g",['Must be 9 Characters or more in length','Has no Uppercase Letters','Has no Special Characters','Has no Numbers'])
TestPassword("!",[
    'Must be 9 Characters or more in length',
    'Has no Uppercase Letters',
    'Has no Lowercase Letters',
    'Has no Numbers'
    ],

)
TestPassword(
    "@",
    [
    'Must be 9 Characters or more in length',
    'Has no Uppercase Letters',
    'Has no Lowercase Letters',
    'Has no Numbers'
    ]
)
TestPassword(
    "Glare",
    [
    'Must be 9 Characters or more in length',
    'Has no Special Characters',
    'Has no Numbers',
    ]
)
TestPassword(
    "glaring",
    [
    'Must be 9 Characters or more in length',
    'Has no Uppercase Letters',
    'Has no Special Characters',
    'Has no Numbers',
    ]
)
TestPassword(
    "glaringsing",
    [
    'Has no Uppercase Letters',
    'Has no Special Characters',
    'Has no Numbers',
    ]
)
TestPassword(
    "glaring21",
    [
    'Has no Uppercase Letters',
    'Has no Special Characters',
    ]
)
TestPassword(
    "Glaring21?",
    true,
)