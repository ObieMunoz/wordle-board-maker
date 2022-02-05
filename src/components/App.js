import './App.css'
import React, { useState } from 'react';
import * as htmlToImage from 'html-to-image';

const BOARD_OBJECT = {
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
  E5: '',
  F1: '',
  F2: '',
  F3: '',
  F4: '',
  F5: ''
}

function App() {
  const [board, setBoard] = useState(BOARD_OBJECT)
  const [input, setInput] = useState('')

  function handleReset() {
    setBoard(BOARD_OBJECT)
    setInput('')
    document.querySelectorAll('p').forEach(p => p.style.backgroundColor = 'black')
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

  function handleUpdateBoard(e) {
    const letters = e.target.value.toUpperCase().split('')
    setBoard({
      A1: letters[0] || '',
      A2: letters[1] || '',
      A3: letters[2] || '',
      A4: letters[3] || '',
      A5: letters[4] || '',
      B1: letters[5] || '',
      B2: letters[6] || '',
      B3: letters[7] || '',
      B4: letters[8] || '',
      B5: letters[9] || '',
      C1: letters[10] || '',
      C2: letters[11] || '',
      C3: letters[12] || '',
      C4: letters[13] || '',
      C5: letters[14] || '',
      D1: letters[15] || '',
      D2: letters[16] || '',
      D3: letters[17] || '',
      D4: letters[18] || '',
      D5: letters[19] || '',
      E1: letters[20] || '',
      E2: letters[21] || '',
      E3: letters[22] || '',
      E4: letters[23] || '',
      E5: letters[24] || '',
      F1: letters[25] || '',
      F2: letters[26] || '',
      F3: letters[27] || '',
      F4: letters[28] || '',
      F5: letters[29] || ''
    })
    if (e.target.value.length < 31) {
      setInput(e.target.value)
    }
  }

  return (
    <>
      <div id="intro" style={{ color: 'white' }}>
        <h1>Wordle Board Maker</h1>
        <h3>Instructions:</h3>
        <span>1. Enter the letters you want on the board</span><br></br>
        <span>2. Click each cell to change their colors</span><br></br>
        <span>3. Press save to save your board image!</span><br></br>
        <br />
      </div>

      <div id="board">
        <p name="A1" onClick={handleColor}>{board.A1}</p>
        <p name="A2" onClick={handleColor}>{board.A2}</p>
        <p name="A3" onClick={handleColor}>{board.A3}</p>
        <p name="A4" onClick={handleColor}>{board.A4}</p>
        <p name="A5" onClick={handleColor}>{board.A5}</p>
        <br />
        <p name="B1" onClick={handleColor}>{board.B1}</p>
        <p name="B2" onClick={handleColor}>{board.B2}</p>
        <p name="B3" onClick={handleColor}>{board.B3}</p>
        <p name="B4" onClick={handleColor}>{board.B4}</p>
        <p name="B5" onClick={handleColor}>{board.B5}</p>
        <br />
        <p name="C1" onClick={handleColor}>{board.C1}</p>
        <p name="C2" onClick={handleColor}>{board.C2}</p>
        <p name="C3" onClick={handleColor}>{board.C3}</p>
        <p name="C4" onClick={handleColor}>{board.C4}</p>
        <p name="C5" onClick={handleColor}>{board.C5}</p>
        <br />
        <p name="D1" onClick={handleColor}>{board.D1}</p>
        <p name="D2" onClick={handleColor}>{board.D2}</p>
        <p name="D3" onClick={handleColor}>{board.D3}</p>
        <p name="D4" onClick={handleColor}>{board.D4}</p>
        <p name="D5" onClick={handleColor}>{board.D5}</p>
        <br />
        <p name="E1" onClick={handleColor}>{board.E1}</p>
        <p name="E2" onClick={handleColor}>{board.E2}</p>
        <p name="E3" onClick={handleColor}>{board.E3}</p>
        <p name="E4" onClick={handleColor}>{board.E4}</p>
        <p name="E5" onClick={handleColor}>{board.E5}</p>
        <br />
        <p name="F1" onClick={handleColor}>{board.F1}</p>
        <p name="F2" onClick={handleColor}>{board.F2}</p>
        <p name="F3" onClick={handleColor}>{board.F3}</p>
        <p name="F4" onClick={handleColor}>{board.F4}</p>
        <p name="F5" onClick={handleColor}>{board.F5}</p>
      </div>
      <br></br>
      <br></br>
      <input type="text" value={input} onChange={handleUpdateBoard} placeholder="Type here..." style={{ width: '350px' }} />
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleReset}>Reset</button>

      <br />
      <br />
    </>
  );
}

export default App;
