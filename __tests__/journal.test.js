import Entry from './../src/journal.js';

describe('Entry', () => {

test('it should return the string values of title and body properties', () => {

let journalEntry = new Entry("title", "This is a sentence in the body");

expect(journalEntry.title).toEqual("title");
expect(journalEntry.body).toEqual("This is a sentence in the body");

});

test('it should return the words in the body property as an array', () => {

let journalEntry = new Entry("Title", "This is a sentence in the body");
expect (journalEntry.wordCount(journalEntry.body)).toEqual(["This", "is", "a", "sentence", "in", "the", "body"]);
  
});

});
