//Brandon McGhee Assignment 3

var json = {
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
                "skills": "Electrical",
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

var current = false;
var brandon = json.boys.brandon.name;
var mike = json.boys.mike.name;
var chuck = json.boys.chuck.name;
var beginning = [
"One day three friends were hanging out playing video games. ",
"Suddenly the game shut off and the boys lost their game. ",
"They decided to go check out the breaker box to see what was wrong. ",         
];

var intro = function() {
    for (var i = 0; i < beginning.length; i++) {
            console.log(beginning[i]);
    }
    powerOut(false);
}

var chuckSkills = function () {
    if (json.boys.chuck.skills == "Electrical") {
        console.log(json.boys.chuck.name + " knows his stuff and goes to work on the problem.");
        iterator = 10;
    }
    else {
        console.log(chuck + " does not remember how to fix this problem.");
    }
    killingTime(5)
};

var killingTime = function(timeLeft) {
    while (timeLeft > 0) {
        console.log(chuck + " said it would be " + timeLeft + " minutes before he was done.");
        while (timeLeft > 3) {
                console.log(mike + " and " + brandon + " sat and waited for " + chuck + " to fix the problem");
                timeLeft--;
        }
        console.log("The boys were starting to get impatient with " + chuck);
    }
    
};

var powerOut = function(power) {
    if (power) {
        console.log(brandon + ", " + mike + " and " + chuck + " played all day until they defeated Ganon!");
    }
    else {
        console.log("The boys had to go check the breaker box to see what the problem was.  They will need someone with Electrical skills to fix this.");
        console.log(chuck + " is one of the few people who knows Electrical stuff, so they ask him if he knows how to fix it.");
        chuckSkills();
        
        if (current) {
            console.log(chuck + " reset the breaker, power came back on and started the game over again!");
        }
        else {
            console.log(chuck + " determined that the current is out to the house, so the boys must think of something else to do");
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

/*var mike = boyBuilder("Mike");
mike.setAge(11);
mike.setSkills("Ninja");

console.log(mike.Name() + " is " + mike.Age() + " years old and has nice " + mike.Skills() + " skills.");

var chuck = boyBuilder("Chuck");
mike.setAge(12);//setter
mike.setSkills("Electrical");//setter

var brandon = boyBuilder("Brandon");
mike.setAge(11);
mike.setSkills("Computer Hacking");
*/


//getter method (accessor)
/*for (var key in json.boys) {
    var boy = json.boys[key];
    console.log(boy.name + " is " + boy.age + " years old and has " + boy.skills + " skills.");
};*/

intro();