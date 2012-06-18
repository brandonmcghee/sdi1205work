//Brandon McGhee
//SDI1205 Project 4 "Building a Library"

var stringFunc = function() {
    
    var isPhoneNum = function(phoneNum) {
        
        var dash = "-";
        var verify = 0;
        
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
    
    var isURL = function(link) {
        if (link.substring(0,5) == "http:" || link.substring(0,6) == "https:") {
            console.log("Valid Email Address");
        }
        else {
            console.log("Invalid Email Address");
        }
    }
    
    return {
        "isPhone": isPhoneNum,
        "isURL": isURL
    }
    
};

var inputPhone = "555-555-5555";
var PHONE = stringFunc("phoneValidate");
PHONE.isPhone(inputPhone);

var inputLink = "http://www.fullsail.edu";
var URL = stringFunc("urlValidate");
URL.isURL(inputLink);