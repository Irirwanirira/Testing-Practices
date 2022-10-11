const stringLength = require('./stringLenght')

test('reflect the length of an array', () => {
    expect(stringLength('length')).toBe(6)
} )



test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
} )
