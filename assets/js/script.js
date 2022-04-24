$(document).ready(function() {
/*----Fixed nav scroll----*/
    $('.nav-quiz-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    }, {
        offset: '60px'
    });

/*----Mobile nav toggle----*/
    $('.mobile-icon-js').click(function() {
        var nav = $('.main-nav-js');
        var icon = $('.mobile-icon-js i');

        nav.slideToggle(200);

        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-xmark');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-xmark');
        }
    });

// QUIZ JS

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("location-selection-button").addEventListener("click", locationSubmit);
    document.getElementById("quiz-one-button").addEventListener("click", themeSubmit);
    document.getElementById("quiz-two-button").addEventListener("click", themeSubmit);
    document.getElementById("quiz-three-button").addEventListener("click", themeSubmit);
    document.getElementById("quiz-four-button").addEventListener("click", themeSubmit);
    document.getElementById("quiz-five-button").addEventListener("click", themeSubmit);
    document.getElementById("donation-type-button").addEventListener("click", donationTypeSubmit);
})

//variable set by country selection question, will be used to generate final results
let country = "test";

//object that will be populated with 'scores' from theme questions, in the form ['a', 'd', 'c'.....etc]
let scorecard = {
a:0,
b:0,
c:0,
d:0,
e:0 
}

// stageTracker keeps count of the "stage" of the quiz. 0 is location question, 1 is the first quiz question, 2 is second quiz question etc.
// is augmented by "+1" after each answer is submitted, moving the quiz to the next stage.
let stageTracker = 0;


// called when 'start quiz' button is clicked, sets country variable to answer selected by radio buttons
function locationSubmit() {

    let locationSelector = document.forms[0]
    for (i=0; i< locationSelector.length; i++){
        if (locationSelector[i].checked){
            country = locationSelector[i].value;
        }
    }
    console.log(country);
    if (verifyRadioCheck()) {
        stageTracker +=1;
        console.log(`Stage tracker No:${stageTracker}`)
        nextStage();
    }

};

// called when "next" buttons are pressed after each quiz section, adds +1 to scorecard object for matching answer 
function themeSubmit() {
    if (verifyRadioCheck()) {
        // if (stageTracker >= 1 && stageTracker < 7) {

        // }
        stageTracker +=1;
        console.log(`Stage tracker No:${stageTracker}`)
        nextStage();
    }

}

//called when users click to submit an answer for the donation type question.
function donationTypeSubmit() {
    if (verifyRadioCheck) {
        let donationTypeSelector = document.forms[6]
        for (i=0; i< donationTypeSelector.length; i++){
            if (donationTypeSelector[i].checked){
                donationType = donationTypeSelector[i].value;
                console.log(donationType);
            }
        }
    stageTracker +=1;
    console.log(`Stage tracker No:${stageTracker}`)
    //Tiebreaker check
    }
}


// called whenever answers are submitted to verify that a radio button has been checked for the current section.
// if it has, stageTracker is augmented by 1 and next stage is called, if not User is given an alert to check an answer
function verifyRadioCheck() {
    let currentForm = document.forms[stageTracker]
    for (i=0; i< currentForm.length; i++){
        if (currentForm[i].checked){
            if (currentForm[i].value.length === 1) {
                let score = currentForm[i].value;
                scorecard[score]++;
            }
            console.log(scorecard)
            return true   
        }
    }
    console.log(radio-check-verified)
    //checkForTie(); DISREGARD
}


// if stage counter would move to 6, looks for a tie in the scorecard results, if there is a tie then tiebreaker stage is started  
//if no tie then proceeds to donation-type quiz question  
function checkForTie() {

     
    for (let i = scorecard; i <= scorecard.length; i++) {
        if (stageTracker <= 6 && scorecard.length == scorecard.length ) {
            alert('We need just a little more information from you, would you ming answering one more Question?');
            

        
    }
    }

    
    

} 


// called after successful verifyRadioCheck, hides previous stage of quiz, shows new stage
function nextStage() {
    let previousStage = stageTracker - 1;
    console.log(previousStage)
    console.log(stageTracker)
    document.getElementById(`quiz-div-${stageTracker}`).removeAttribute("class");
    document.getElementById(`quiz-div-${previousStage}`).setAttribute("class","hidden");
}


// called after a theme-form is submitted, adjsut scorecard object by +1 accordingly
// function addScore() {
//     let currentForm = document.forms[stageTracker] {

})
=======
