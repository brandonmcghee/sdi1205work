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
    
    return {
        "isPhone": isPhoneNum
    }
    
};

var inputPhone = "404-555-1234";
var PHONE = stringFunc("phoneValidate");
PHONE.isPhone(inputPhone);