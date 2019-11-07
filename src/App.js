import React from 'react';
import Tone from 'tone';
import './App.css';

class BlackNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };

    this.synth = new Tone.AMSynth().toMaster();
    this.playNote = this.playNote.bind(this);
    this.stopNote = this.stopNote.bind(this);
  }

  playNote(e) {
    this.setState({pressed: true});
    this.props.noteName(e.target.id.replace('Sharp','#').replace('Flat','b'));
    this.synth.triggerAttack(e.target.id[0] + e.target.id.replace('Sharp','#')[1] + '4');
  }

  stopNote(e) {
    this.setState({pressed: false});
    this.synth.triggerRelease();
  }

  render() {
    let up = this.props.x + "," + this.props.y + " " +
      this.props.x + "," + (this.props.y+150) + " " +
      (this.props.x+10) + "," + (this.props.y+160) + " " +
      (this.props.x+70) + "," + (this.props.y+160) + " " +
      (this.props.x+80) + "," + (this.props.y+150) + " " +
      (this.props.x+80) + "," + this.props.y;
    
    let down = this.props.x + "," + this.props.y + " " +
      this.props.x + "," + (this.props.y+160) + " " +
      (this.props.x+10) + "," + (this.props.y+170) + " " +
      (this.props.x+70) + "," + (this.props.y+170) + " " +
      (this.props.x+80) + "," + (this.props.y+160) + " " +
      (this.props.x+80) + "," + this.props.y;

    let played;
    if(this.state.pressed) played = down;
    else played = up;

    return (
      <g id={this.props.id}>
        <polygon
          className="App-black-note-gray"
          points={down} />
        <polygon id={this.props.id.slice(4, this.props.id.length)}
          className="App-black-note"
          onMouseDown={this.playNote}
          onMouseUp={this.stopNote}
          points={played} />
      </g>
    );
  }
}

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };

    this.synth = new Tone.AMSynth().toMaster();
    this.playNote = this.playNote.bind(this);
    this.stopNote = this.stopNote.bind(this);
  }

  playNote(e) {
    this.setState({pressed: true});
    this.props.noteName(e.target.id.replace('Sharp','#').replace('Flat','b'));
    this.synth.triggerAttack(e.target.id.replace('Sharp','#').replace('Flat','') + '4');
  }

  stopNote(e) {
    this.setState({pressed: false});
    this.synth.triggerRelease();
  }

  render() {
    let up = this.props.x + "," + this.props.y + " " +
      this.props.x + "," + (this.props.y+300) + " " +
      (this.props.x+10) + "," + (this.props.y+310) + " " +
      (this.props.x+90) + "," + (this.props.y+310) + " " +
      (this.props.x+100) + "," + (this.props.y+300) + " " +
      (this.props.x+100) + "," + this.props.y;
    
    let down = this.props.x + "," + this.props.y + " " +
      this.props.x + "," + (this.props.y+310) + " " +
      (this.props.x+10) + "," + (this.props.y+320) + " " +
      (this.props.x+90) + "," + (this.props.y+320) + " " +
      (this.props.x+100) + "," + (this.props.y+310) + " " +
      (this.props.x+100) + "," + this.props.y;

    let played;
    if(this.state.pressed) played = down;
    else played = up;
    
    return (
      <g id={this.props.id}>
        <polygon
          className="App-white-note-gray"
          points={down} />
        <polygon id={this.props.id.slice(4, this.props.id.length)}
          className="App-white-note"
          onMouseDown={this.playNote}
          onMouseUp={this.stopNote}
          points={played} />
      </g>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteName: "Played note will appear here"
    };

    this.changeNoteName = this.changeNoteName.bind(this);
  }

  changeNoteName(note) {
    this.setState({noteName: note});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <svg className="App-logo">
            {/* White Notes */}
            <Note id="noteC" noteName={this.changeNoteName} x={0} y={0} />
            <Note id="noteD" noteName={this.changeNoteName} x={100} y={0} />
            <Note id="noteE" noteName={this.changeNoteName} x={200} y={0} />
            <Note id="noteF" noteName={this.changeNoteName} x={300} y={0} />
            <Note id="noteG" noteName={this.changeNoteName} x={400} y={0} />
            <Note id="noteA" noteName={this.changeNoteName} x={500} y={0} />
            <Note id="noteB" noteName={this.changeNoteName} x={600} y={0} />

            {/* Black Notes */}
            <BlackNote id="noteCSharpDFlat" noteName={this.changeNoteName} x={60} y={0} />
            <BlackNote id="noteDSharpEFlat" noteName={this.changeNoteName} x={160} y={0} />
            <BlackNote id="noteFSharpGFlat" noteName={this.changeNoteName} x={360} y={0} />
            <BlackNote id="noteGSharpAFlat" noteName={this.changeNoteName} x={460} y={0} />
            <BlackNote id="noteASharpBFlat" noteName={this.changeNoteName} x={560} y={0} />
          </svg>
          <p className="App-note-name">
            {this.state.noteName}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
