import React from 'react';

export default function DisplayBoard({ handleColor, board }) {
    return <div id="board">
        <p name="A1" className="cell" onClick={handleColor}>{board.A1}</p>
        <p name="A2" className="cell" onClick={handleColor}>{board.A2}</p>
        <p name="A3" className="cell" onClick={handleColor}>{board.A3}</p>
        <p name="A4" className="cell" onClick={handleColor}>{board.A4}</p>
        <p name="A5" className="cell" onClick={handleColor}>{board.A5}</p>
        <br />
        <p name="B1" className="cell" onClick={handleColor}>{board.B1}</p>
        <p name="B2" className="cell" onClick={handleColor}>{board.B2}</p>
        <p name="B3" className="cell" onClick={handleColor}>{board.B3}</p>
        <p name="B4" className="cell" onClick={handleColor}>{board.B4}</p>
        <p name="B5" className="cell" onClick={handleColor}>{board.B5}</p>
        <br />
        <p name="C1" className="cell" onClick={handleColor}>{board.C1}</p>
        <p name="C2" className="cell" onClick={handleColor}>{board.C2}</p>
        <p name="C3" className="cell" onClick={handleColor}>{board.C3}</p>
        <p name="C4" className="cell" onClick={handleColor}>{board.C4}</p>
        <p name="C5" className="cell" onClick={handleColor}>{board.C5}</p>
        <br />
        <p name="D1" className="cell" onClick={handleColor}>{board.D1}</p>
        <p name="D2" className="cell" onClick={handleColor}>{board.D2}</p>
        <p name="D3" className="cell" onClick={handleColor}>{board.D3}</p>
        <p name="D4" className="cell" onClick={handleColor}>{board.D4}</p>
        <p name="D5" className="cell" onClick={handleColor}>{board.D5}</p>
        <br />
        <p name="E1" className="cell" onClick={handleColor}>{board.E1}</p>
        <p name="E2" className="cell" onClick={handleColor}>{board.E2}</p>
        <p name="E3" className="cell" onClick={handleColor}>{board.E3}</p>
        <p name="E4" className="cell" onClick={handleColor}>{board.E4}</p>
        <p name="E5" className="cell" onClick={handleColor}>{board.E5}</p>
        <br />
        <p name="F1" className="cell" onClick={handleColor}>{board.F1}</p>
        <p name="F2" className="cell" onClick={handleColor}>{board.F2}</p>
        <p name="F3" className="cell" onClick={handleColor}>{board.F3}</p>
        <p name="F4" className="cell" onClick={handleColor}>{board.F4}</p>
        <p name="F5" className="cell" onClick={handleColor}>{board.F5}</p>
    </div>;
}