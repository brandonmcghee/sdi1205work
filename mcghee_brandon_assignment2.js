//This Javascript developed by Brandon McGhee for SDI 1205 Project 2

var boys = ["Brandon", "Mike", "Chuck"];
var vote = 0;
var current = true;
var zelda = "One day three friends were playing The Legend of Zelda. They were getting close to defeating gannon when suddenly. Click! The power shuts off and the boys lose their game. ";

var story = function() {
    console.log(zelda);
    powerOut();
    
};//End adventure Function

var powerOut = function() {
    console.log(boys[0] + ", " + boys[1] + " and " + boys[2] + " had to find out the problem.  So they went and checked the breaker box");
    checkBreaker();
    
};//End powerOut Function

var checkBreaker = function() {
    console.log("Since there is no current and the power will be out for a while the boys must do something else.")
    decideActivity();
    
}//End checkBreaker Function

var decideActivity = function(activity,vote) {
    
    console.log(boys[2] + " suggested that they play Basketball since it was so nice outside today.");
    console.log(boys[1] + " had another idea to go look for some Bamboo in the woods he heard about.");
    console.log("All three of them decided to put it to a vote.");
    
    letsDiscussIt();
    
};//End decideActivity Function

var letsDiscussIt = function() {
  
    Vote();
    
};//End letsDiscussIt Function

var Vote = function() {
    
    
};//End Vote Function

story();


    



