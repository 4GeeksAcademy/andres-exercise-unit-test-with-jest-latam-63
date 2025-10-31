// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = (dollars) => {
    let valueInYen = (dollars / oneEuroIs.USD) * oneEuroIs.JPY
    return valueInYen;
}

const fromYenToPound = (yens) => {
    let valueInPounds = (yens / oneEuroIs.JPY) * oneEuroIs.GBP
    return valueInPounds;
}

const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };