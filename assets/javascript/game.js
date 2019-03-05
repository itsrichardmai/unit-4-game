// global variables

// player wins & losses 
var wins = 0;
var losses = 0;
// player totalScore and the computer's generated random score.
var totalScore = 0; 
var randomScore = 0;
var scoreValues = new Array(4);
var crystalPic = "/assets/images/Final-Crystal.jpg"
var gameWon = false;
var gameLost = false;

$(document).ready(function() {
    // reset the player score and computer score.
    $("#randomScore").empty();
    // randomScore = number from 19 - 120.
    randomScore = Math.floor(Math.random() * 120 + 19);
    // console.log(randomScore); WORKS AS INTENDED. 
    $("#randomScore").append("Get This Score To Win!: " + randomScore);

    $("#totalScore").html("Your Score: " + totalScore);
        // generating crystal buttons.
        for (var i = 0; i < scoreValues.length; i++) {

            scoreValues[i] = Math.floor(Math.random() * 8 + 1);
            
            var crystalButton = $("<button>")
            // store the random value in the button created.
            crystalButton.addClass('btn btn-primary');
        
            crystalButton.attr('value', scoreValues[i]);

            $('<img/>', {
                src: 'assets/images/Final-Crystal.jpg',
                width: '225px',
                height: '200px',
        
            }).appendTo($(crystalButton)); 
        
            crystalButton.on('click', function(score) {

                score = totalScore 

                totalScore += parseInt($(this).val());

                $("#totalScore").html("Your Score: " + totalScore);

                if (totalScore === randomScore) {
                    gameWon = true;
                    alert("Congratulations! You Won!");
                    wins++;
                    $("#wins").html("Wins: " + wins);
                    
                }   else if (totalScore > randomScore) {
                    gameLost = true;
                    alert("RIP! You Lost!");
                    losses++; 
                    $("#losses").html("Losses: " + losses);
                }   else {
                    return;
                }

            })

            $("#imgDiv").append(crystalButton);
        }

})


function restart () {
    randomScore = Math.floor(Math.random() * 120 + 19);
    $("#randomScore").append("Get This Score To Win!: " + randomScore);

    for (var i = 0; i < scoreValues.length; i++) {
        
        scoreValues[i] = Math.floor(Math.random() * 8 + 1);

        totalScore = 0;

    }
}