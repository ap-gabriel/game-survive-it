// CONSTANT //
const resources = document.querySelectorAll('[data-resourcemain]') // Gets resource divs
const resourceTotal = document.querySelector('[data-resourcetotal]') // Gets resource points

resources.forEach((element) => {
    element.addEventListener('click', (event) => {
        const targetOperation = event.target.dataset.resourceoperator
        const targetParent = event.target.parentNode
        if (targetOperation === '-' || targetOperation == '+' && parseInt(resourceTotal.innerHTML) > 0) {
            resourceController(targetOperation, targetParent)
            resourceTotal.innerHTML = String(10 - calculateResources())
        }
    })
});

// FUNCTION //
// Gets resource.innerHTML and apply operation received from button pressed.
function resourceController(operation, parent) {
    const resource = parent.querySelector('[data-resourceamount]')
    resource.innerHTML = String(manageAmount(operation, parseInt(resource.innerHTML)))
}

// Manages resourceTotal.innerHTML calculation to limit how many points the player can use.
function calculateResources() {
    const resourceAmount = document.querySelectorAll('[data-resourceamount]')
    let amountSum = 0
    resourceAmount.forEach( (amount) => {
        amountSum = (amountSum + parseInt(amount.innerHTML))
    })
    return amountSum
}

// Receives operator string (+/-) and return value +/- 1
function manageAmount(operation, value) {
    if (operation === '-' && value > 0) {return value - 1}
    else if (operation === '+') {return value + 1}
    else {return 0}
};