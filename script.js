//Brandon McGhee
//SDI1205 Project 4 "Building a Library"

var stringFunc = function() {
    
    var verify = 0;
    var dash = "-";
    var at = "@";
    var per = ".";

    //Phone Number Validation Function
    var isPhoneNum = function(phoneNum) {

        for (var i = 0; i < phoneNum.length; i++) {
            if (phoneNum.charAt(i) == dash) {
                verify++;
            }
        }
        
        if (verify == 2 && phoneNum.length == 12) {
            console.log("Valid Phone Number");
        }
        else {
            console.log("Invalid Phone Number");
        }
    }
    
    //URL Validation Function
    var isURL = function(link) {
        if (link.substring(0,5) == "http:" || link.substring(0,6) == "https:") {
            console.log("Valid URL");
        }
        else {
            console.log("Invalid URL");
        }
    }
    
    //Email Validation Function
    var isEmail = function(address) {
        verify = 0;
        for (var i = 0; i < address.length; i++) {
            if (address.charAt(i) == at || address.charAt(i) == per) {
                verify++;
            }
        }
        
        if (verify == 2 && address.indexOf(at) < address.indexOf(per)) {
            console.log("Valid Email Address");
        }
        else {
            console.log("Invalid Email Address");
        }
    }
    

    
    return {
        "isPhone": isPhoneNum,
        "isURL": isURL,
        "isEmail": isEmail,
    }
    
};

var numFunc = function(name) {
    
    //String to Number Function
    var strToNum = function(string) {
        console.log(parseInt(string));
    }
    //Two Decimal Place Setter Function
    var numDeci = function(num) {
        var fix = num.toFixed(2);
        console.log(fix);
    }
    
    return {
        "strToNum": strToNum,
        "numDeci": numDeci
    }
}

var arrayFunc = function(name) {
    
    //Add Numbers in Array Function
    var numInArray =  function(array) {
        
        var finalNum = 0;
        
        for (var i = 0; i < array.length; i++) {
            if (!isNaN(array[i])) {
                finalNum = finalNum + parseInt(array[i]);
            }
        }
        console.log(finalNum);
    }
    
    var smallValue = function(value) {
        
    }
    
    return {
        "numInArray": numInArray,
        "smallValue": smallValue
    }
}

//String Functions
var inputPhone = "555-555-5555";
var PHONE = stringFunc("phoneValidate");
PHONE.isPhone(inputPhone);

var inputLink = "http://www.fullsail.edu";
var URL = stringFunc("urlValidate");
URL.isURL(inputLink);

var inputEmail = "CaptainPants@skitskat.org"
var EMAIL = stringFunc("emailValidate");
EMAIL.isEmail(inputEmail);


//Number Functions
var inputString = "42";
var NUMSTRING = numFunc("stringToNumber");
NUMSTRING.strToNum(inputString);

var inputNumDecimal = 2.5
var NUMDECI = numFunc("numDecimal");
NUMDECI.numDeci(inputNumDecimal);

//Array Functions
var inputArray = ["0", 23445939, "http://www.apple.com", 4, 85, 12, "cookies", 869];
var NUMARRAY = arrayFunc("numInArray");
NUMARRAY.numInArray(inputArray);

var inputValue = 8;
var SMALLVALARRAY = arrayFunc("smallValueArray");
SMALLVALARRAY.smallValue(inputValue);