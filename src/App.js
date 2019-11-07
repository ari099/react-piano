import React from 'react';
import './App.css';

const BlackNote = props => {
  let up = props.x + "," + props.y + " " +
    props.x + "," + (props.y+150) + " " +
    (props.x+10) + "," + (props.y+160) + " " +
    (props.x+70) + "," + (props.y+160) + " " +
    (props.x+80) + "," + (props.y+150) + " " +
    (props.x+80) + "," + props.y;
  
  let down = props.x + "," + props.y + " " +
    props.x + "," + (props.y+160) + " " +
    (props.x+10) + "," + (props.y+170) + " " +
    (props.x+70) + "," + (props.y+170) + " " +
    (props.x+80) + "," + (props.y+160) + " " +
    (props.x+80) + "," + props.y;

    let played;
    if(props.pressed) played = down;
    else played = up;

  return (
    <g id={props.id}>
      <polygon
        className="App-black-note-gray"
        points={down} />
      <polygon id={props.id.slice(4, props.id.length)}
        className="App-black-note"
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        points={played} />
    </g>
  )
}

const Note = props => {
  let up = props.x + "," + props.y + " " +
    props.x + "," + (props.y+300) + " " +
    (props.x+10) + "," + (props.y+310) + " " +
    (props.x+90) + "," + (props.y+310) + " " +
    (props.x+100) + "," + (props.y+300) + " " +
    (props.x+100) + "," + props.y;
  
  let down = props.x + "," + props.y + " " +
    props.x + "," + (props.y+310) + " " +
    (props.x+10) + "," + (props.y+320) + " " +
    (props.x+90) + "," + (props.y+320) + " " +
    (props.x+100) + "," + (props.y+310) + " " +
    (props.x+100) + "," + props.y;

  let played;
  if(props.pressed) played = down;
  else played = up;
  
  return (
    <g id={props.id}>
      <polygon
        className="App-white-note-gray"
        points={down} />
      <polygon id={props.id.slice(4, props.id.length)}
        className="App-white-note"
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        points={played} />
    </g>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteName: "Played note will appear here",
      played: false
    };

    this.playNote = this.playNote.bind(this);
    this.stopNote = this.stopNote.bind(this);
  }

  playNote(e) {
    this.setState({
      noteName: e.target.id.replace('Sharp','#').replace('Flat','b')
    });
    this.setState({
      played: true
    });
  }

  stopNote(e) {
    this.setState({
      played: false
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <svg className="App-logo">
            {/* White Notes */}
            <Note id="noteC"
              x={0} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <Note id="noteD"
              x={100} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <Note id="noteE"
              x={200} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <Note id="noteF"
              x={300} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <Note id="noteG"
              x={400} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <Note id="noteA"
              x={500} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <Note id="noteB"
              x={600} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />

            {/* Black Notes */}
            <BlackNote id="noteCSharpDFlat"
              x={60} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <BlackNote id="noteDSharpEFlat"
              x={160} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <BlackNote id="noteFSharpGFlat"
              x={360} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <BlackNote id="noteGSharpAFlat"
              x={460} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
            <BlackNote id="noteASharpBFlat"
              x={560} y={0}
              pressed={this.state.played}
              onMouseDown={this.playNote}
              onMouseUp={this.stopNote} />
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
