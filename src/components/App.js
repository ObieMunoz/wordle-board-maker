import React, { useEffect, useState } from 'react';
import './App.css';
import DataForm from './DataForm';
import DisplayBoard from './DisplayBoard';
import Footer from './Footer';
import Instructions from './Instructions';
import { BOARD_OBJECT } from './utils.js';

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
      <Footer />
    </>
  );
}

export default App;





