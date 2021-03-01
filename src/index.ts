// styles
import './styles/reset.css';
import './styles/center.css';
import './styles/board.css';
import './styles/cellState.css';

import { 
    INITboard, 
    CELL, 
    boardBuilder } from './assets/board';

import { Pieces, attacher } from './assets/pieces/index';
import { HeadCont } from './assets/dash';

const DOMbody = document.querySelector('body') as HTMLBodyElement;

const INITDOMboard = boardBuilder(INITboard);
attacher(INITDOMboard, Pieces[0]);

DOMbody.appendChild(INITDOMboard);
DOMbody.appendChild(HeadCont);

enum STATE {
    READY,
    PROGRESS,
    END
};

enum PIECE {
    PRESENT,
    NOTPRESENT
};

let gameState = STATE.READY;
let pieceState = PIECE.NOTPRESENT;
// when start btn is pressed, gameState becomes STATE.PROGRESS
// progInterval = setInterval that: 

// const speed = 500;

// const startGame = () => {
//     let activePc; // randomly generate a piece to init

//     const progInterval = setInterval(() => {

//         switch(pieceState) {
//             case PIECE.PRESENT:
//                 // perform drop
//                 break;

//             case PIECE.NOTPRESENT:
//                 // generate piece
//                 break;

//             default:
//                 throw new Error('piece in some weird state');
//         };

//     }, 500);

//     return progInterval;
// };