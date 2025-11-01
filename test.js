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

    const yen = fromDollarToYen(10);

    const expected = (10/1.07) * 156.5

    expect(yen).toBe(expected)
})

test('One pound should be around 179.88 yens', () => {

    const pound = fromYenToPound(10);

    const expected = (10/156.5) * 0.87
    expect(pound).toBe(expected)
})