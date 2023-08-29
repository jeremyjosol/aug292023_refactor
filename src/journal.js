export default function Entry(title, body){
  this.title = title;  
  this.body = body;
}

let journalEntry = new Entry("title", "This is a sentence in the body");
