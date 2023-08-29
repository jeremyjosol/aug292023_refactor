import Entry from './../src/journal.js';

describe('Entry', () => {

test('it should accurately count the amount of words in the journals body sentence', () => {

let journalEntry = new Entry("title", "This is a sentence in the body");

expect(journalEntry.title).toEqual("title");
expect(journalEntry.body).toEqual("This is a sentence in the body");

});

});
