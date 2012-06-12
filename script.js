//Brandon McGhee Assignment 3


var boyBuilder = function (Name) {
  
    var _Name = function() {
        return Name;
    }
    var setAge = function(num) {
        age = num;
    }
    
    var _Age = function() {
        return age;
        }
        
    var setSkills = function(item) {
        skills = item;
    }
    var _Skills = function() {
        return skills;
        }
    
    return {
        "Name": _Name,
        "Age": _Age,
        "setAge": setAge,
        "Skills": _Skills,
        "setSkills": setSkills
    };
};

var mike = boyBuilder("Mike");
mike.setAge(11);
mike.setSkills("Ninja");

console.log(mike.Name() + " is " + mike.Age() + " years old and has nice " + mike.Skills() + " skills.");

var chuck = boyBuilder("Chuck");
mike.setAge(12);
mike.setSkills("Electrical");

console.log(chuck.Name() + " is " + chuck.Age() + " years old and has nice " + chuck.Skills() + " skills.");

var brandon = boyBuilder("Brandon");
mike.setAge(11);
mike.setSkills("Computer Hacking");

console.log(brandon.Name() + " is " + brandon.Age() + " years old and has nice " + brandon.Skills() + " skills.");