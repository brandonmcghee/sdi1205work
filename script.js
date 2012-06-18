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
        
        if (verify == 2) {
            if (phoneNum.charAt(3) == dash && phoneNum.charAt(7) == dash) {
                console.log("Valid Phone Number")
                if (phoneNum.length == 11) {
                    console.log("Correct Length");
                }
            }
        else {
            console.log("Invalid Phone Number");
        }
        }
    }
    
    return {
        "isPhone": isPhoneNum
    }
    
};

var inputPhone = "407-555-1234";
var PHONE = stringFunc("phoneValidate");

PHONE.isPhone(inputPhone);