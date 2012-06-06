//This Javascript developed by Brandon McGhee for SDI 1205 Project 2

var boys = ["Brandon", "Mike", "Chuck"];
var vote = 0;

var zelda = "One day three friends were playing The Legend of Zelda. They were getting close to defeating gannon when suddenly. Click! The power shuts off and the boys lose their game. ";

var story = function() {
    console.log(zelda);
    powerOut(false);
    
};//End adventure Function

var powerOut = function(powerOff) {
    
    if (powerOff) {
        console.log(boys[0] + ", " + boys[1] + " and " + boys[2] + " had to find out the problem.  So they went and checked the breaker box");
        checkBreaker(true);
    }
    else {
        console.log("The power came back on and the boys kept playing and eventually defeated Ganon!");
    };
    
    checkBreaker(false);
    
};//End powerOut Function

var checkBreaker = function(breakerProblem) {
    
    if (breakerProblem) {
        console.log(boys[1] + " checked the Breaker box was able to fix the problem.  So the boys defeated that pesky ole Ganon!")
    }
    else {
        console.log("The breaker was fine so there is no current to the home.  Since there is no current and the power will be out for a while the boys must do something else.");
        decideActivity("Basketball", "Bamboo Quest");
    };
    
    
}//End checkBreaker Function

var decideActivity = function() {
    
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


    



