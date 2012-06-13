//Brandon McGhee Assignment 3

var current = false;

var powerOut = function(power) {
    if (power) {
        console.log("The three boys played all day until they defeated Ganon!");
    }
    else {
        console.log("The boys had to go check the breaker box to see what the problem was. ");
        
        if (current) {
            console.log("They reset the breaker, power came back on and started the game over again!");
        }
        else {
            console.log("The current is out to the house, so the boys must think of something else to do");
        }
    }
};

/*var boyBuilder = function (Name) {
  
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
};*/



var mike = boyBuilder("Mike");
mike.setAge(11);
mike.setSkills("Ninja");

console.log(mike.Name() + " is " + mike.Age() + " years old and has nice " + mike.Skills() + " skills.");

var chuck = boyBuilder("Chuck");
mike.setAge(12);//setter
mike.setSkills("Electrical");//setter

var brandon = boyBuilder("Brandon");
mike.setAge(11);
mike.setSkills("Computer Hacking");

var heroes = {
    "boys": {
            "mike": {
                "name": "Mike",
                "age": 11,
                "skills": "Ninja",
                "activities": ["Bamboo"]
            },
            "chuck": {
                "name": "Chuck",
                "age": 12,
                "skills": "Electrial",
                "activities": ["Basketball", "Cards", "Swimming"]
            },
            "brandon": {
                "name": "Brandon",
                "age": 11,
                "skills": "Computer Hacking",
                "activities": ["Basketball", "Cards", "Frizbee"]
            }
            
    }
};

powerOut(true);

//getter method (accessor)
for (var key in heroes.boys) {
    var boy = heroes.boys[key];
    console.log(boy.name + " is " + boy.age + " years old and has " + boy.skills + " skills.");
};

