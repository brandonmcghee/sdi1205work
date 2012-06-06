//This Javascript developed by Brandon McGhee for SDI 1205 Project 2

var boys = ["Brandon", "Mike", "Chuck"];
var zelda = "One day three friends were playing The Legend of Zelda. They were getting close to defeating gannon when suddenly. Click! The power shuts off and the boys lose their game. ";

var checkBreaker = function(breakerProblem) {
    
    if (breakerProblem) {
        return true;
    }
    else {
        return false;
    }
    
};//End checkBreaker Function

var suggestActivity = function(numberOfActivities) {

    while (numberOfActivities > 1) {
        if (numberOfActivities > 2) {
        console.log("They kept talking and narrowed it down to " + numberOfActivities);
        }

    numberOfActivities--;
    }
    
    return 2;
    
};//End decideActivity Function

var letsDiscussIt = function() {
    
    var activity1 = "Basketball";
    var activity2 = "Bamboo";
    return ("They decided to go search for " + activity2);
    
};//End letsDiscussIt Function

var Vote = function() {
    
    var Votes = [];
    
    for (var votesLeft = 3; votesLeft > 0; votesLeft--) {
        Votes.push("Bamboo");
    };
    
    return Votes;
    
};//End Vote Function

var tellStory = function(breaker, activity, discussion, results) {
    
    console.log(zelda + " So they decided they need to check out the breaker to see if thats the problem. ");
    
    checkBreaker(false);
    breaker = checkBreaker();
    
    if (breaker) {
        console.log("It turned out to just be the breaker kicking, so they reset it and started the game over!")
        return;
    }
    else {
        console.log("The breaker was fine, so the current must be out to the house. ")
    }
    
    console.log(boys[2] + " suggested they figure out what to do since the power is going to be off a while. So they started suggesting ideas to each other, but they need to narrow it down so they could vote.");
    suggestActivity(10);
    activity = suggestActivity();
    
    console.log("Now they had to discussion the two options they had come up with.");
    
    console.log("Searching for Bamboo and Basketball were the choices they were facing.  To be fair they took a vote on it.");
    Vote();
    results = Vote();
    
    console.log(boys[0] + " voted for " + results[0]);
    console.log(boys[1] + " also voted for " + results[0]);
    console.log(boys[2] + " went with " + results[0] + " as well.");
    
    console.log("With all three of them in agreement they set off on their epic quest");
    console.log("Will they find the mysterious " + results[1] + " in the woods?");
    console.log("What dangers will they encounter along the way?");
    
    return;
};//End tellStory Function


tellStory();
console.log("To be continued.......");



