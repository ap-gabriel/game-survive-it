// CONSTANTS //

const resources = document.querySelectorAll('[data-resourcemain]') // Gets resource divs
const resourceTotal = document.querySelector('[data-resourcetotal]') // Gets resource points

// MAIN //

// Adds listener to fieldset children.
// If button +/-, adds/remove input.value by calling resourceController()
// Calculate resourceTotal.value by calling calculateResources()
resources.forEach((element) => {
    element.addEventListener('click', (event) => {
        const targetOperation = event.target.dataset.resourceoperator
        const targetParent = event.target.parentNode
        if (targetOperation === '-' || targetOperation == '+' && resourceTotal.value > 0) {
            resourceController(targetOperation, targetParent)
            resourceTotal.value = (10 - calculateResources())
        }
    })
});

// FUNCTIONS //

// Gets resource.value and apply operation received from button pressed.
function resourceController(operation, parent) {
    const resource = parent.querySelector('[data-resourceamount]')
    resource.value = manageAmount(operation, parseInt(resource.value))
}

// Manages resourceTotal.value calculation to limit how many points the player can use.
function calculateResources() {
    const resourceAmount = document.querySelectorAll('[data-resourceamount]')
    let amountSum = 0
    resourceAmount.forEach((amount) => {
        amountSum = (amountSum + parseInt(amount.value))
    })
    return amountSum
}

// Receives operator string (+/-) and return value +/- 1
function manageAmount(operation, value) {
    if (operation === '-' && value > 0) {return value - 1}
    else if (operation === '+') {return value + 1}
    else {return 0}
};