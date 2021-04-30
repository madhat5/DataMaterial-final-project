console.log('sim sim salabim')

// let data = require("./DATA/nyc2020Weather.json")
// console.log(data)

// const Tone = require('tone');

// for (i = 0; i < data.length - 1; i++) {
//     console.log(data[i].spnNote)
// }


(function () {
  // Membrane Synth https://tonejs.github.io/docs/r12/MembraneSynth
  const synth = new Tone.Synth().toDestination();

  function playSynth() {
    synth.triggerAttackRelease("C2", "8n");
  }
  /**
   * Play Controls
   */


  document.querySelector("body > button").addEventListener("click", () => {
    // playSynth();
    console.log('blah')
  });
})();