// console.log('sim sim salabim');

import * as Tone from 'tone';
import data from './nyc2020Weather.json'

// console.log(data)

const synth = new Tone.Synth().toDestination()
const now = Tone.now()

function playSynth() {
    // synth.triggerAttackRelease("C2", "8n");

    data.forEach((el, i) => {
        // console.log(el.spnNote)
        let note = el.spnNote

        synth.triggerAttackRelease(note, "8n", now + 1);
    })
}
/**
 * Play Controls
 */


document.querySelector("body > button").addEventListener("click", () => {
    // console.log('blah')
    playSynth();
});