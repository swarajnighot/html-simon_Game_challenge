var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var started = false;
var level = 0;


$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

function nextSequence() {

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}



$(".btn").on("click", function (event) {
    var userChosenColour = event.target.id;

    userClickedPattern.push(userChosenColour);
    console.log((userClickedPattern.length) - 1);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer((userClickedPattern.length) - 1)
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    // $("#"+currentColour).toggleClass("pressed");
    // $("#"+currentColour).removeClass("pressed");


    $(document).ready(function () {
        $("#" + currentColour).addClass("pressed");

        setTimeout(function () {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
    });

}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");
        playSound("wrong")

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart  Your Score is " + level);

        startOver();
    }

}

function startOver() {

    level = 0;
    gamePattern = [];
    started = false;
}


someElement.addEventListener(
    "touchstart",
    (e) => {
      // Log the state of this event's modifier keys
       (e) => {
      // Log the state of this event's modifier keys
      console.log(`altKey = ${e.altKey}`);
      e.altKey;
    },
    },
    false,
  );
