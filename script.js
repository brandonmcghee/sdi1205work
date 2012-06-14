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

//Array Function - For Loop
var intro = function() {
    for (var i = 0; i < beginning.length; i++) {
            console.log(beginning[i]);
    }
    powerOut(false);//Calling Boolean Function, passing Boolean Value
}

//Boolean Function - Nested Conditional
var powerOut = function(power) {
    if (power) {
        console.log(brandon + ", " + mike + " and " + chuck + " played all day until they defeated Ganon!");
    }
    else {
        console.log("The boys had to go check the breaker box to see what the problem was.  They will need someone with Electrical skills to fix this.");
        console.log(chuck + " is one of the few people who knows Electrical stuff, so they ask him if he knows how to fix it.");
        chuckSkills("knows his stuff and goes to work on the problem");//Calling Object Function, passing String
        
        if (current) {
            console.log(chuck + " reset the breaker, power came back on and started the game over again!");
        }
        else {
            return
        }
    }
    
};

//Object Function
var chuckSkills = function (knowledge) {
    if (json.boys.chuck.skills == "Electrical") { //Getter Method
        console.log(json.boys.chuck.name + " " + knowledge);
    }
    else {
        console.log(chuck + " does not remember how to fix this problem.");
    }
    killingTime(8)//Call Number Function, Passing Number (8) minutes to work on Electrical Problem
};

//Number Function - Nested Loop
var killingTime = function(timeLeft) {
    var timePassed = 1;
    while (timeLeft > 0) {
            if (timeLeft == 8) {
                console.log(chuck + " said it would be " + timeLeft + " minutes before he was done.");
            }

        while (timePassed > 0 && timePassed < 8) {
                console.log(mike + " and " + brandon + " were bored and impatient with " + chuck + " and it had been " + timePassed + " minutes since Chuck started.");
                timePassed++;
        }
            timeLeft--;
    }
    console.log(chuck + " determined that the current is out to the house, so the boys must think of something else to do");

    return
    
};


intro();