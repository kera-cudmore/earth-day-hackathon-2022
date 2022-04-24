document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("location-selection-button").addEventListener("click", locationSubmit);

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

// stageTrackerkeeps count of the "stage" of the quiz. 0 is location question, 1 is the first quiz question, 2 is second quiz question etc.
// is augmented by "+1" after each answer is submitted, moving the quiz to the next stage.
let stageTracker = 0



// called when 'start quiz' button is clicked, sets country variable to answer selected by radio buttons
function locationSubmit() {
    let locationSelector = document.forms[0]
    for (i=0; i< locationSelector.length; i++){
        if (locationSelector[i].checked){
            country = locationSelector[i].value;
        }
    }
    //verifyRadioCheck();
    console.log(country);
}

// called when "next" buttons are pressed after each quiz section, adds +1 to scorecard object for matching answer 
function themeSubmit() {



}


// called whenever answers are submitted to verify that a radio button has been checked for the current section.
// if it has, stageTracker is augmented by 1 and next stage is called, if not User is given an alert to check an answer
function verifyRadioCheck() {

    
    //checkForTie();
}


// if stage counter would move to 6, looks for a tie in the scorecard results, if there is a tie then tiebreaker stage is started  
//if no tie then proceeds to donation-type quiz question  
function checkForTie() {

} 