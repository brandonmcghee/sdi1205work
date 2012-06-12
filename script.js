//Brandon McGhee Assignment 3

var boyBuilder = function (name, age, skills, suggestion) {
    
    var accessName = function() { return name;}
    var accessAge = function() { return age;}
    var accessSkills = function() { return skills;}
    var accessSuggestion = function() { return suggestion}
    
    return {
        "name": accessName,
        "age": accessAge,
        "skills": accessSkills,
        "suggestion": accessSuggestion
    };
};

var boy1 = boyBuilder("Mike", 11, "Ninja Skills", "Bamboo Quest");
var boy2 = boyBuilder("Chuck", 12, "Electrical Skills", "Basketball");
var boy3 = boyBuilder("Brandon", 11, "Computer Hacking Skills", "Don't Care");

console.log(boy1.age());

