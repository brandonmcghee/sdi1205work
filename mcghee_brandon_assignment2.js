//This Javascript developed by Brandon McGhee for SDI 1205 Project 2

var boys = ["Brandon", "Mike", "Chuck"];
var vote = 0;
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
        console.log("The boys narrowed down their choice of activites to " + numberOfActivities);
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
        Votes.push(1);
    };
    

    
    return Votes;
    
};//End Vote Function

var tellStory = function(breaker, activity, discussion, story) {
    
    checkBreaker(false);
    breaker = checkBreaker();
    console.log(breaker);
    
    suggestActivity(10);
    activity = suggestActivity();
    console.log(activity);
    
    letsDiscussIt();
    discussion = letsDiscussIt();
    console.log(discussion);
    
    Vote();
    story = Vote();
    console.log(story);
    
    
    
    
};


tellStory();
    



