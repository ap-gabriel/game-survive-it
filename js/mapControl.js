// CONSTANTS //

const diffDict = {
    "food" : {
        "kid" : "There's plenty of food in the area",
        "easy" : "Good sources of food in the area.",
        "medium" : "Not many sources of food around",
        "hard" : "No food sources :c."
    },
    "cold" : {
        "kid" : "It's really warm today.",
        "easy" : "It's a bit cold outside.",
        "medium" : "It's really cold outside.",
        "hard" : "Winter storm today :c."
    },
    "hazard" : {
        "kid" : "This place isn't dangerous.",
        "easy" : "I can get hurt around here.",
        "medium" : "This place has many dangers.",
        "hard" : "This will be tough :c."
    },
    "enemy" : {
        "kid" : "There are no enemies around.",
        "easy" : "There's few enemies roaming the area.",
        "medium" : "There are many enemies in this place.",
        "hard" : "There's enemies everywhere :c."
    }
}
const threatList = document.querySelectorAll('[data-threattype]')

// LETS //

let diffList = []
let diffLimit = []
let i = 0

// MAIN //

setDifficulty(threatList, diffList, diffLimit)
populateInputs(threatList, diffDict, diffList)

// FUNCTIONS //

function populateInputs(threatsArr, diffDict, diffList) {
    threatsArr.forEach( (element) => {
        const threatMain = element.name
        const threatDict = diffDict[threatMain]
        element.value = threatDict[diffList[i]]
        i += 1
    })
}

function setDifficulty(threatsArr, curDiff, limitDiff) {
    threatsArr.forEach( (element) => {   
        let randomDiff = getRandDifficulty(Math.floor(Math.random() * 4));
        if (randomDiff === 'hard') {
            if (limitDiff.includes('hard')) 
                {return curDiff.push('medium')}
            else 
                {return limitDiff.push('hard'), curDiff.push('hard')}
        }
        else if (randomDiff === 'kid') {
            if (limitDiff.includes('kid')) 
                {return curDiff.push('easy')}
            else 
                {return limitDiff.push('kid'), curDiff.push('kid')}
        }
        else {
            curDiff.push(randomDiff)
        }
    })
}

function getRandDifficulty(randomNumber) {
    if (randomNumber === 0) {return 'kid'}
    else if (randomNumber === 1) {return 'easy'}
    else if (randomNumber === 2) {return 'medium'}
    else {return 'hard'}
}

function getIntDifficulty(array) {
    if (array === 'kid') {return 0}
    else if (array === 'easy') {return 1}
    else if (array === 'medium') {return 2}
    else {return 3}
}