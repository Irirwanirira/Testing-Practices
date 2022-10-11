import calculator from "./module/calculus"

calculator

test('add 2 nbrs', function(){
    expect(calculator.add(2,4)).toBe(6)
})

test('substracting 2 nbrs', function(){
    expect(calculator.substract(2,4)).not.toBe(6)
})


describe('multiplication and division', () => {

    test('Multiplying 2 numbers', () => {
      expect(calculator.multiply(4, 2)).toBe(8);
    }),

    test('dividing 2 numbers', () => {
        expect(calculator.divide(4, 2)).toBeTruthy();
      })
})


