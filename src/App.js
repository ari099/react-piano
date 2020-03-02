import React, { useState } from 'react';
import Tone from 'tone';
import './App.css';

/**
 * Functional Note component
 * Properties:
 *  => color (Boolean, black or white)
 *  => playing (Boolean, yes or no)
 *  => note (String)
 *  => x (Integer)
 *  => y (Integer)
 * @param props 
 */
const Note = props => {

  const currentNote = () => {
    props.setNote(props.note);
  }

  // Up position of the piano key
  let up = (props.color) ? props.x + "," + props.y + " " +
    props.x + "," + (props.y+300) + " " +
    (props.x+10) + "," + (props.y+310) + " " +
    (props.x+90) + "," + (props.y+310) + " " +
    (props.x+100) + "," + (props.y+300) + " " +
    (props.x+100) + "," + props.y : props.x + "," + props.y + " " +
    props.x + "," + (props.y+150) + " " +
    (props.x+10) + "," + (props.y+160) + " " +
    (props.x+70) + "," + (props.y+160) + " " +
    (props.x+80) + "," + (props.y+150) + " " +
    (props.x+80) + "," + props.y;
  
  // Down position of the piano key
  let down = (props.color) ? props.x + "," + props.y + " " +
    props.x + "," + (props.y+310) + " " +
    (props.x+10) + "," + (props.y+320) + " " +
    (props.x+90) + "," + (props.y+320) + " " +
    (props.x+100) + "," + (props.y+310) + " " +
    (props.x+100) + "," + props.y : props.x + "," + props.y + " " +
    props.x + "," + (props.y+160) + " " +
    (props.x+10) + "," + (props.y+170) + " " +
    (props.x+70) + "," + (props.y+170) + " " +
    (props.x+80) + "," + (props.y+160) + " " +
    (props.x+80) + "," + props.y;

  return (
    <g>
      <polygon
        className={(props.color) ? "App-white-note-gray" : "App-black-note-gray"}
        points={down} />
      <polygon id={props.note}
        className={(props.color) ? "App-white-note" : "App-black-note"}
        onMouseOver={currentNote}
        points={(props.playing) ? down : up} />
    </g>
  );
};

/**
 * Main application functional component
 * @param props 
 */
const App = props => {
  const synth = new Tone.Synth();
  synth.envelope.attack = 0.01;
  synth.envelope.attackCurve = "linear";
  synth.envelope.decay = 1.20;
  synth.envelope.decayCurve = "exponential";
  synth.envelope.release = 1.87;
  synth.envelope.releaseCurve = "exponential";
  // synth.oscillator.type = "sine";
  synth.oscillator.partialCount = 7;
  synth.toMaster();

  const [currentNote, setCurrentNote] = useState("");
  // const [playing, setPlaying] = useState(false);
  const [C, setC] = useState(false);
  const [D, setD] = useState(false);
  const [E, setE] = useState(false);
  const [F, setF] = useState(false);
  const [G, setG] = useState(false);
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);
  const [Cs, setCs] = useState(false);
  const [Ds, setDs] = useState(false);
  const [Fs, setFs] = useState(false);
  const [Gs, setGs] = useState(false);
  const [As, setAs] = useState(false);

  const notes = {
    "C4" : [C, setC],
    "D4" : [D, setD],
    "E4" : [E, setE],
    "F4" : [F, setF],
    "G4" : [G, setG],
    "A4" : [A, setA],
    "B4" : [B, setB],
    "C#4" : [Cs, setCs],
    "D#4" : [Ds, setDs],
    "F#4" : [Fs, setFs],
    "G#4" : [Gs, setGs],
    "A#4" : [As, setAs]
  };

  const kbNotes = {
    "A" : "C4",
    "S" : "D4",
    "D" : "E4",
    "F" : "F4",
    "J" : "G4",
    "K" : "A4",
    "L" : "B4",
    "W" : "C#4",
    "E" : "D#4",
    "U" : "F#4",
    "I" : "G#4",
    "O" : "A#4"
  };

  const changeNote = (note) => {
    setCurrentNote(note);
  };

  const play = (e) => {
    if (currentNote !== "") {
      notes[currentNote][1](true);
      synth.triggerAttackRelease(currentNote, "32n");
    }
  };

  const stop = (e) => {
    if (currentNote !== "") {
      notes[currentNote][1](false);
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <svg className="App-logo" onMouseDown={play} onMouseUp={stop}>
            {/* White Notes */}
            <Note color={1} note="C4" playing={C} setNote={changeNote} x={0} y={0} />
            <Note color={1} note="D4" playing={D} setNote={changeNote} x={100} y={0} />
            <Note color={1} note="E4" playing={E} setNote={changeNote} x={200} y={0} />
            <Note color={1} note="F4" playing={F} setNote={changeNote} x={300} y={0} />
            <Note color={1} note="G4" playing={G} setNote={changeNote} x={400} y={0} />
            <Note color={1} note="A4" playing={A} setNote={changeNote} x={500} y={0} />
            <Note color={1} note="B4" playing={B} setNote={changeNote} x={600} y={0} />

            {/* Black Notes */}
            <Note color={0} note="C#4" playing={Cs} setNote={changeNote} x={60} y={0} />
            <Note color={0} note="D#4" playing={Ds} setNote={changeNote} x={160} y={0} />
            <Note color={0} note="F#4" playing={Fs} setNote={changeNote} x={360} y={0} />
            <Note color={0} note="G#4" playing={Gs} setNote={changeNote} x={460} y={0} />
            <Note color={0} note="A#4" playing={As} setNote={changeNote} x={560} y={0} />
          </svg>
        </header>
      </div>
    </>
  );
};

export default App;
