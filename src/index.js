// console.log('sim sim salabim');

import * as Tone from 'tone';
import data from './nyc2020Weather.json'

// console.log(data)

const synth = new Tone.Synth().toDestination()
const now = Tone.now()

function playSynth(count) {
    synth.triggerAttackRelease(data[count].spnNote, "8n");

    // data.forEach((el, i) => {
    //     // console.log(el.spnNote)
    //     let note = el.spnNote

    //     synth.triggerAttackRelease(note, "8n", now + 1);
    // })
}

document.querySelector("body > button").addEventListener("click", () => {
    // console.log(data[0].spnNote)
    // playSynth();
    myLoop();
});


var i = 1; //  set your counter to 1

function myLoop() { //  create a loop function
    setTimeout(function () { //  call a 3s setTimeout when the loop is called
        // console.log('hello'); //  your code here
        playSynth(i);
        i++; //  increment the counter
        if (i < data.length - 1) { //  if the counter < 10, call the loop function
            myLoop(); //  ..  again which will trigger another 
        } //  ..  setTimeout()
    }, 200)
}

