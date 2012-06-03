//This Javascript developed by Brandon McGhee for SDI 1205 Project 2

//String Variables w/ Declarations
var friend1 = "Mike";
var friend2 = "Chuck";
var me = "Brandon";
var activity1 = "Basketball";
var activity2 = "Bamboo Quest";

//Boolean Variables w/ Declarations
var powerOut = true;
var jumpFence = false;
var runHome = true;

//Number Variables w/ Declarations

var vote1 = 1
var vote2 = 0
var vote3 = 1

//Final Vote using the sum of all vote variables.  Friends are voting to go on the Bamboo Quest or Basketball.  The "1" counts as a "yes" to Baskeball, "0" would be for Bamboo
finalVote = vote1 + vote2 + vote3;


//Logic statements to decide activities
if (powerOut) {
    
    if (finalVote == 3) {
        
        console.log("All three of our heros decided to play Basketball instead of embarking on their epic quest, fail.")
        
    } else {
        
        console.log(friend1 + ", " + friend2 + " and " + me + " decided to embark on the \nBamboo Quest");
    };
    
} else {
    
    if (me == 'Brandon') {
        
        console.log("Brandon will take on Ganon while the others watch him use the Master Sword to conquer evil and save Hyrule!");
        
    } else {
        
        console.log(friend1 + " ," + friend2 + " and " + me + " argued over who will save Zelda again, alas no one could decided, Ganon wins, destroys Hyrule.");
        
    };
    
};



    