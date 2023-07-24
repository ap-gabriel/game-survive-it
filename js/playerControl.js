// CONST //
const playButton = document.querySelector('[data-playbutton]') // Gets the play button
const resourceInputs = document.querySelectorAll('[data-resourceamount]') // Gets player resource setup
const results = document.querySelectorAll('[data-results]') // Gets results values

// LET //
let resourceSetup = []
let testsWon = 0
let testsLost = 0
let roundsWon = 0
let roundsLost = 0
let r = 0

// MAIN //
setButton(playButton, runGame)

// FUNCTION //
// Adds listener to play button //
function setButton(buttonPlay, func) {
    buttonPlay.addEventListener('click', func)
}

// Exececutes when play button is pressed, running all the game logic and re-rolling the map difficulty //
function runGame() {
    resetPlayerInfo()
    buildResourceArray(resourceSetup, resourceInputs)
    compareResourceDifficulty(resourceSetup, diffNumbers)
    checkRunResult(testsWon, testsLost)
    updateResults(results, roundsWon, roundsLost)
    setupMap() // Function called from mapControl.js
}

// Empties all arrays and resets iterators //
function resetPlayerInfo() {
    resourceSetup = []
    testsWon = 0
    testsLost = 0
    r = 0
}

// Updates the wins / losses counter //
function updateResults(resultsArr, winnings, losses) {
    resultsArr[0].innerHTML = (parseInt(resultsArr[0].innerHTML * 0)) + winnings
    resultsArr[1].innerHTML = (parseInt(resultsArr[1].innerHTML * 0)) + losses
}

// Checks if player managed to survive or not //
function checkRunResult(winnings, losses) {
    if (winnings > losses) {return roundsWon += 1}
    else {return roundsLost += 1}
}

// Builds array based on selected resources to check against difficulty integer array //
function buildResourceArray(array, inputs) {
    inputs.forEach( (resource) => {
        array.push(resource.innerHTML)
    })
}

// Checks player resources array values against difficulty integer array //
function compareResourceDifficulty(resArray, diffArray) {
    resArray.forEach( (resourceValue) => {
        if (resourceValue >= diffArray[r]) {testsWon += 1}
        else {testsLost += 1}
        r += 1
    })
}