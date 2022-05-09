var targetInput = document.getElementById("disease-search"),    // Search box ID input element -- ID = disease-search
    results = document.getElementById ("auto-complete-results"), // Auto complete results is an unordered list in html. That ul will have id = auto-complete-results
    diseaseList = ["Huntington's disease", "DRPLA", "Dentatorubral-pallidoluysian atrophy", "SBMA",
                   "Spinal-bulbar muscular atrophy", "SCA1","Spinocerebellar ataxia type 1", "SCA2", "Spinocerebellar ataxia type 2", "SCA3", "Spinocerebellar ataxia type 3",
                   "SCA6", "Spinocerebellar ataxia type 6", "SCA7", "Spinocerebellar ataxia type 7", "SCA17", "Spinocerebellar ataxia type 17"],
    matches = [],
    resultsCursor = 0;

// Focus the input

targetInput.focus();
// Add event listener for the input keydown
targetInput.addEventListener("keydown", function(event){
    if (event.keyCode == "13"){
        event.preventDefault();
    }
});

// Add event listener for the input keyup
targetInput.addEventListener("keyup", function(event){
    // Key codes:
    // Enter : 13
    // Up : 38
    // Down : 40
    results.innerHTML = ""; // Removes previous results
    toggleResults("hide");
    if (this.value.length > 0){ // This refers to targetinput - Main object
        matches = getMatches (this.value);
        if (matches.length > 0){
            displayMatches( matches);
        }
    }
    if (results.classList.contains("visible")){
        switch(event.keyCode){
            case 13:
                targetInput.value = results.children[resultsCursor].innerHTML;    // results is a ul , children is each li, resultscursor is the position highlighted, innerHTML is the text within the hightlighted li
                toggleResults( "hide");
                resultsCursor = 0;
                break;
            case 38:
                if (resultsCursor > 0){
                    resultsCursor--;

                    moveCursor(resultsCursor)
                }
                break;
            case 40:
                if (resultsCursor< (matches.length - 1)){
                    resultsCursor++;

                    moveCursor (resultsCursor)
                }
                break;
        }
    }
});

// Function for hidding results list

function toggleResults( action ) {
    if (action == "show"){
        results.classList.add("visible")
    } else if (action == "hide"){
        results.classList.remove("visible");
    }
}

// Get matches function

function getMatches (inputText) {
    var matchlist = [];

    for (var i = 0; i < diseaseList.length; i++ ){
        if (diseaseList[i].toLowerCase().indexOf( inputText.toLowerCase()) != -1){
            matchlist.push (diseaseList[i]);
        }
    }
    return matchlist;
}

// Function for displaying autocompletion results

function displayMatches (matchlist){
    var j = 0;

    while (j < matchlist.length){
        results.innerHTML += '<li class="result">' + matchlist[j] + '</li>';
        j++;
    }
    // First child class of "highlighted"
    moveCursor (resultsCursor);
    // Show results
    toggleResults("show");
}

// Function for moving cursor in the results list

function moveCursor(pos){
    for (var x = 0; x < results.children.length; x++){
        results.children[x].classList.remove("highlighted");
    }

    results.children[pos].classList.add("highlighted");
}
