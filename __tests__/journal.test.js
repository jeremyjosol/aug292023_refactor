// import Constructor from './../src/javascript.js';

// describe('Constructor', () => {}
describe('Entry', () => {

test('it should accurately count the amount of words in the journals body sentence', () => {

const journalEntry = new Entry(title, body);

expect(journalEntry.checkType()).toEqual("how many words in journals body sentence");

});

});
// test() => {}