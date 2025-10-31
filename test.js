const { sum, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function () {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test('One dollar should be around 146.26 yen', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26)
})

test('One pound should be around 179.88 yens', () => {
    expect(fromYenToPound(359.76)).toBeCloseTo(2)
})