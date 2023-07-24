// CONSTANT //
// Using 2d dictionaries to store data and retrieve with dynamic functions.
const diffDict = {
    "food" : {
        "very easy" : "There's plenty of food in the area",
        "easy" : "Good sources of food in the area.",
        "medium" : "Not many sources of food around",
        "hard" : "No food sources :c."
    },
    "cold" : {
        "very easy" : "It's really warm today.",
        "easy" : "It's a bit cold outside.",
        "medium" : "It's really cold outside.",
        "hard" : "Winter storm today :c."
    },
    "hazard" : {
        "very easy" : "This place isn't dangerous.",
        "easy" : "I can get hurt around here.",
        "medium" : "This place has many dangers.",
        "hard" : "Hazardous environment :c."
    },
    "enemy" : {
        "very easy" : "There are no enemies around.",
        "easy" : "There's few enemies roaming the area.",
        "medium" : "There are many enemies in this place.",
        "hard" : "Enemies everywhere :c."
    }
}
const imgArray = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
]
const nameArray = [
    "Lost Coast",
    "Twilight Strand",
    "Racoon City",
    "Hydra Marsh",
    "Midgard",
    "Black Mesa",
]

const threatList = document.querySelectorAll('[data-threattype]')
const mapImage = document.querySelector('[data-mapimage]')
const mapName = document.querySelector('[data-mapname]')

// LET //
let diffList = []
let diffLimit = []
let diffNumbers = []
let i = 0

// MAIN //
setupMap()

// FUNCTION //
// Execute all neceesary functions when called to setup, also called on ready //
function setupMap() {
    resetMapInfo()
    setupScenario(mapImage, mapName, imgArray, nameArray)
    setDifficulty(threatList, diffList, diffLimit)
    populateInputs(threatList, diffDict, diffList)
    getDifficultyValues(diffList, diffNumbers)
}

// Empties all arrays and reset iterators //
function resetMapInfo() {
    diffList = []
    diffLimit = []
    diffNumbers = []
    i = 0
}

// Gets texts from the 2D dictionary to populate the inputs with the corresponding data //
function populateInputs(threatsArr, diffDict, diffList) {
    threatsArr.forEach( (element) => {
        const threatMain = element.title
        const threatDict = diffDict[threatMain]
        element.innerHTML = threatDict[diffList[i]]
        i += 1
    })
}

// Setups random difficulty, and cap very easy / hard difficulties to 1 //
function setDifficulty(threatsArr, curDiff, limitDiff, diffValuesArr) {
    threatsArr.forEach( (element) => {   
        let randomDiff = getRandDifficulty(Math.floor(Math.random() * 4));
        if (randomDiff === 'hard') {
            if (limitDiff.includes('hard')) 
                {return curDiff.push('medium')}
            else 
                {return limitDiff.push('hard'), curDiff.push('hard')}
        }
        else if (randomDiff === 'very easy') {
            if (limitDiff.includes('very easy')) 
                {return curDiff.push('easy')}
            else 
                {return limitDiff.push('very easy'), curDiff.push('very easy')}
        }
        else {
            curDiff.push(randomDiff)
        }
    })
}

// Gets the difficulty of each threat as integers to check against players resources //
function getDifficultyValues(diffArray, diffValuesArray) {
    diffArray.forEach( (element) => {
        diffValuesArray.push(getIntDifficulty(element))
    })
}

// Returns difficulty based on random number input //
function getRandDifficulty(randomNumber) {
    if (randomNumber === 0) {return 'very easy'}
    else if (randomNumber === 1) {return 'easy'}
    else if (randomNumber === 2) {return 'medium'}
    else {return 'hard'}
}

// Returns difficulty integer based on array of strings input //
function getIntDifficulty(array) {
    if (array === 'very easy') {return 0}
    else if (array === 'easy') {return 1}
    else if (array === 'medium') {return 2}
    else {return 3}
}

// Get map image thru random index position
function getMapImage(imageArray, randomNumber) {
    return imageArray[randomNumber]
}

// Get map name thru random index position
function getMapName(nameArray,randomNumber) {
    return nameArray[randomNumber]
}

function setupScenario(mapImg, mapNam, imgArr, namArr) {
    mapImg.src = "../graphics/maps/" + getMapImage(imgArr, Math.floor(Math.random() * 7))
    mapNam.innerHTML = getMapName(namArr, Math.floor(Math.random() * 6))
}