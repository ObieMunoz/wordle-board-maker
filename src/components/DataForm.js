import FileSaver from 'file-saver';
import * as htmlToImage from 'html-to-image';
import React, { useState } from 'react';
import { BOARD_OBJECT } from './utils';
import './DataForm.css'

export default function DataForm({ setBoard }) {
    const [input, setInput] = useState('')

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

    function handleReset(e) {
        e.preventDefault()
        setBoard(BOARD_OBJECT)
        setInput('')
        document.querySelectorAll('p').forEach(p => p.style.backgroundColor = 'black')
    }

    return <form onSubmit={handleSave}>
        <input type="text" value={input} onChange={handleUpdateBoard} placeholder="Type here..." style={{ width: '350px' }} />
        <br />
        <button type="submit">Save</button>
        <button onClick={handleReset}>Reset</button>
    </form>;
}
