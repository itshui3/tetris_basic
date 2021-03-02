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
import { HeaderBuilder } from './assets/dash';

import { startGame, endGame } from './assets/helpers/gameRuntime';

const DOMbody = document.querySelector('body') as HTMLBodyElement;

const INITDOMboard = boardBuilder(INITboard);
const UpdatedDOMBoard = attacher(INITDOMboard, Pieces[0]);

console.log(UpdatedDOMBoard);

DOMbody.appendChild(INITDOMboard);

// HeaderBuilder();
// DOMbody.appendChild(HeadCont);

// const speed = 500;
let stateThing = 0;

// const startGame = (Pieces: Piece[]) => {
//     // init random piece
//     let initPc = Pieces[Math.floor(Math.random() * Pieces.length)]


//     const progInterval = setInterval(() => {

//         console.log('can scope increment within interval?', stateThing);
//         stateThing++;

//     }, 500);

//     return progInterval;
// };

// const endGame = (gameInterval:NodeJS.Timeout) => {
//     clearInterval(gameInterval);
// }