import React, { useState, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import FileSaver from 'file-saver';
import DisplayBoard from './DisplayBoard';
import Instructions from './Instructions';
import './App.css'

const BOARD_OBJECT = {
  A1: ' ',
  A2: ' ',
  A3: ' ',
  A4: ' ',
  A5: ' ',
  B1: ' ',
  B2: ' ',
  B3: ' ',
  B4: ' ',
  B5: ' ',
  C1: ' ',
  C2: ' ',
  C3: ' ',
  C4: ' ',
  C5: ' ',
  D1: ' ',
  D2: ' ',
  D3: ' ',
  D4: ' ',
  D5: ' ',
  E1: ' ',
  E2: ' ',
  E3: ' ',
  E4: ' ',
  E5: ' ',
  F1: ' ',
  F2: ' ',
  F3: ' ',
  F4: ' ',
  F5: ' '
}

function App() {
  const [board, setBoard] = useState(BOARD_OBJECT)
  const [input, setInput] = useState('')

  useEffect(() => {
  }, [board])

  function handleReset() {
    setBoard(BOARD_OBJECT)
    setInput('')
    document.querySelectorAll('p').forEach(p => p.style.backgroundColor = 'black')
  }

  function handleColor(e) {
    if (e.target.style.backgroundColor === '' || e.target.style.backgroundColor === 'black') {
      e.target.style.backgroundColor = '#538d4e'
    } else if (e.target.style.backgroundColor === 'rgb(83, 141, 78)') {
      e.target.style.backgroundColor = '#b49f3b'
    } else if (e.target.style.backgroundColor === 'rgb(180, 159, 59') {
      e.target.style.backgroundColor = '#3a3a3c'
    } else {
      e.target.style.backgroundColor = 'black'
    }
  }

  function handleSave(e) {
    e.preventDefault()
    htmlToImage.toBlob(document.getElementById('board'))
      .then(function (blob) {
        if (window.saveAs) {
          window.saveAs(blob, 'board.png');
        } else {
          FileSaver.saveAs(blob, 'board.png');
        }
      });
  }

  function handleUpdateBoard(e) {
    const boardData = e.target.value.toUpperCase().split('')
    while (boardData.length < 30) {
      boardData.push(' ')
    }

    setBoard(() => ({
      A1: boardData[0],
      A2: boardData[1],
      A3: boardData[2],
      A4: boardData[3],
      A5: boardData[4],
      B1: boardData[5],
      B2: boardData[6],
      B3: boardData[7],
      B4: boardData[8],
      B5: boardData[9],
      C1: boardData[10],
      C2: boardData[11],
      C3: boardData[12],
      C4: boardData[13],
      C5: boardData[14],
      D1: boardData[15],
      D2: boardData[16],
      D3: boardData[17],
      D4: boardData[18],
      D5: boardData[19],
      E1: boardData[20],
      E2: boardData[21],
      E3: boardData[22],
      E4: boardData[23],
      E5: boardData[24],
      F1: boardData[25],
      F2: boardData[26],
      F3: boardData[27],
      F4: boardData[28],
      F5: boardData[29]
    }))
    if (e.target.value.length <= 30) {
      setInput(() => e.target.value)
    }
  }

  return (
    <>
      <h1>Wordle Board Maker</h1>
      <Instructions />
      <DisplayBoard board={board} handleColor={handleColor} />

      <form onSubmit={handleSave}>
        <input type="text" value={input} onChange={handleUpdateBoard} placeholder="Type here..." style={{ width: '350px' }} />
        <br />
        <button type="submit">Save</button>
        <button onClick={handleReset}>Reset</button>
      </form>

      <div id="footer">
        Made by <a href="https://www.linkedin.com/in/obedmunozjr/">Obie Munoz</a><br />
        Explore this project on <a href="https://www.github.com/obiemunoz/wordle-board-maker">Github</a><br />
        Problems? Submit an issue on <a href="https://github.com/ObieMunoz/wordle-board-maker/issues/new">Github</a><br />
      </div>

    </>
  );
}

export default App;



