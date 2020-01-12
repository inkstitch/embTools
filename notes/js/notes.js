// Adding Quotes Functionality


const quoteAdder = document.querySelector('.taskAdder');
const myQuotes = document.querySelector('#quoteID');
const quotes = JSON.parse(localStorage.getItem('Quotes')) || [];


quoteAdder.addEventListener('submit', addTask);
myQuotes.addEventListener('click',toggleDone);
outputQuotes();



function addTask(e){
    e.preventDefault();
    const textQuote = this.querySelector('[name=quote]').value;
    const quote = {
       textQuote, done:false

    }
    quotes.push(quote);
    saveStorage();
    outputQuotes();
    this.reset();
}

function saveStorage() {
    localStorage.setItem('Quotes', JSON.stringify(quotes));
}

function outputQuotes(){
  let html = quotes.map(function (data, i){
    let myClass = data.done ? 'done':'';
    return '<li div data-index=' + i + '><div class="'+ myClass + '">'+ data.textQuote + '<span class="remove"> X </span></div></li>';
  })
  myQuotes.innerHTML = html.join('');
}

function toggleDone(e) {
    //console.log(e);
    const myEl = e.target;
    const mySel = myEl.parentElement;
    if (myEl.className === 'remove') {
        let index = mySel.parentElement.dataset.index;
        let temp = quotes.splice(index, 1);
        console.log(temp);
    }
    else {
        //console.log(e);
        // console.log(tasks[mySel ]);
        myEl.classList.toggle('done');
        //console.log(myEl);
        quotes[mySel.dataset.index].done = !quotes[mySel.dataset.index].done;
    }
    saveStorage();
    //console.log(tasks);
    outputQuotes();
}

// Adding To Do Functionality

const noteAdder = document.querySelector(".noteAdder");
const myTasks = document.querySelector("#tasksID");
const notes = JSON.parse(localStorage.getItem('Notes')) || [];

noteAdder.addEventListener('submit', addNote);
myTasks.addEventListener('click' , toggleNote);
outputNotes();

function addNote(e){
    e.preventDefault();
    const textNote = this.querySelector('[name=task]').value;
    const note = {
       textNote, done:false

    }
    notes.push(note);
    saveStorageNotes();
    outputNotes();
    this.reset();
}

function saveStorageNotes() {
    localStorage.setItem('Notes', JSON.stringify(notes));
}

function outputNotes(){
  let html = notes.map(function (data, i){
    let myClass = data.done ? 'done':'';
    return '<li div data-index=' + i + '><div class="'+ myClass + '">'+ data.textNote + '<span class="remove"> X </span></div></li>';
  })
  myTasks.innerHTML = html.join('');
}

function toggleNote(e) {
    //console.log(e);
    const myEl2 = e.target;
    const mySel1 = myEl2.parentElement;
    if (myEl2.className === 'remove') {
        let index = mySel1.parentElement.dataset.index;
        let temp = notes.splice(index, 1);
        console.log(temp);
    }
    else {
        //console.log(e);
        // console.log(tasks[mySel ]);
        myEl2.classList.toggle('done');
        //console.log(myEl);
        notes[mySel1.dataset.index].done = !notes[mySel1.dataset.index].done;
    }
    saveStorageNotes();
    //console.log(tasks);
    outputNotes();
}

// Clear localStorage
