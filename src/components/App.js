import './App.css'
import React, { useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { toJpeg } from 'html-to-image';

function App() {
  const [board, setBoard] = useState({
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    B1: '',
    B2: '',
    B3: '',
    B4: '',
    B5: '',
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    D1: '',
    D2: '',
    D3: '',
    D4: '',
    D5: '',
    E1: '',
    E2: '',
    E3: '',
    E4: '',
    E5: ''
  })

  function handleChange(e) {
    if (e.target.value.length > 1) {
      return
    } else {
      setBoard({
        ...board,
        [e.target.name]: e.target.value.toUpperCase()
      })
    }
    if (e.target.value === '') {
      e.target.previousElementSibling.focus()
    } else {
      e.target.nextElementSibling.focus()
    }
    console.log(board)
    console.log(e.target.name);
  }

  function handleReset() {
    setBoard({
      A1: '',
      A2: '',
      A3: '',
      A4: '',
      A5: '',
      B1: '',
      B2: '',
      B3: '',
      B4: '',
      B5: '',
      C1: '',
      C2: '',
      C3: '',
      C4: '',
      C5: '',
      D1: '',
      D2: '',
      D3: '',
      D4: '',
      D5: '',
      E1: '',
      E2: '',
      E3: '',
      E4: '',
      E5: ''
    })
  }

  function handleColor(e) {
    if (e.target.style.backgroundColor === '' || e.target.style.backgroundColor === 'black') {
      e.target.style.backgroundColor = '#538d4e'
      console.log(e.target.style.backgroundColor);
    } else if (e.target.style.backgroundColor === 'rgb(83, 141, 78)') {
      e.target.style.backgroundColor = '#b49f3b'
      console.log(e.target.style.backgroundColor);
    } else if (e.target.style.backgroundColor === 'rgb(180, 159, 59') {
      e.target.style.backgroundColor = '#3a3a3c'
      console.log(e.target.style.backgroundColor);
    } else {
      e.target.style.backgroundColor = 'black'
      console.log(e.target.style.backgroundColor);
    }
  }

  function handleSave() {
    htmlToImage.toJpeg(document.getElementById('board'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'board.jpg';
        link.href = dataUrl;
        link.click();
      });
  }

  return (
    <>
      <div id="intro" style={{ color: 'white' }}>
        <h1>Wordle Board Maker</h1>
        <h3>Instructions:</h3>
        <p>1. Enter the letters you want on the board</p>
        <p>2. Click each cell to change their colors</p>
        <p>3. Press save to save your board image!</p>
      </div>
      <div id="board">
        <input type="text" id="word" name="A1" onClick={handleColor} value={board.A1} onChange={handleChange} />
        <input type="text" id="word" name="A2" onClick={handleColor} value={board.A2} onChange={handleChange} />
        <input type="text" id="word" name="A3" onClick={handleColor} value={board.A3} onChange={handleChange} />
        <input type="text" id="word" name="A4" onClick={handleColor} value={board.A4} onChange={handleChange} />
        <input type="text" id="word" name="A5" onClick={handleColor} value={board.A5} onChange={handleChange} />
        <br />
        <input type="text" id="word" name="B1" onClick={handleColor} value={board.B1} onChange={handleChange} />
        <input type="text" id="word" name="B2" onClick={handleColor} value={board.B2} onChange={handleChange} />
        <input type="text" id="word" name="B3" onClick={handleColor} value={board.B3} onChange={handleChange} />
        <input type="text" id="word" name="B4" onClick={handleColor} value={board.B4} onChange={handleChange} />
        <input type="text" id="word" name="B5" onClick={handleColor} value={board.B5} onChange={handleChange} />
        <br />
        <input type="text" id="word" name="C1" onClick={handleColor} value={board.C1} onChange={handleChange} />
        <input type="text" id="word" name="C2" onClick={handleColor} value={board.C2} onChange={handleChange} />
        <input type="text" id="word" name="C3" onClick={handleColor} value={board.C3} onChange={handleChange} />
        <input type="text" id="word" name="C4" onClick={handleColor} value={board.C4} onChange={handleChange} />
        <input type="text" id="word" name="C5" onClick={handleColor} value={board.C5} onChange={handleChange} />
        <br />
        <input type="text" id="word" name="D1" onClick={handleColor} value={board.D1} onChange={handleChange} />
        <input type="text" id="word" name="D2" onClick={handleColor} value={board.D2} onChange={handleChange} />
        <input type="text" id="word" name="D3" onClick={handleColor} value={board.D3} onChange={handleChange} />
        <input type="text" id="word" name="D4" onClick={handleColor} value={board.D4} onChange={handleChange} />
        <input type="text" id="word" name="D5" onClick={handleColor} value={board.D5} onChange={handleChange} />
        <br />
        <input type="text" id="word" name="E1" onClick={handleColor} value={board.E1} onChange={handleChange} />
        <input type="text" id="word" name="E2" onClick={handleColor} value={board.E2} onChange={handleChange} />
        <input type="text" id="word" name="E3" onClick={handleColor} value={board.E3} onChange={handleChange} />
        <input type="text" id="word" name="E4" onClick={handleColor} value={board.E4} onChange={handleChange} />
        <input type="text" id="word" name="E5" onClick={handleColor} value={board.E5} onChange={handleChange} />
      </div>
      <br></br>
      <br></br>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
