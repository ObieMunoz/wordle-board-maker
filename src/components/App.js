import React, { useState, useEffect } from 'react';
import DisplayBoard from './DisplayBoard';
import Instructions from './Instructions';
import './App.css'
import DataForm from './DataForm';
import { BOARD_OBJECT } from './utils.js'

function App() {
  const [board, setBoard] = useState(BOARD_OBJECT)

  useEffect(() => {
  }, [board])

  return (
    <>
      <h1>Wordle Board Maker</h1>
      <Instructions />
      <DisplayBoard board={board} />
      <DataForm setBoard={setBoard} />

      <div id="footer">
        Made by <a href="https://www.linkedin.com/in/obedmunozjr/">Obie Munoz</a><br />
        Explore this project on <a href="https://www.github.com/obiemunoz/wordle-board-maker">Github</a><br />
        Problems? Submit an issue on <a href="https://github.com/ObieMunoz/wordle-board-maker/issues/new">Github</a><br />
      </div>

    </>
  );
}

export default App;




