// styles
import './styles/reset.css';
import './styles/center.css';
import './styles/board.css';
import './styles/cellState.css';

import { 
    INITboard, 
    boardBuilder } from './assets/components/board';
import { CELL } from './constants/CELL';

import { Pieces, attacher } from './assets/pieces/index';
import { HeaderBuilder } from './assets/components/dash';

import { getRandomPc } from './assets/helpers/getRandomPc';

// drop logic
import { validateDrop } from './assets/helpers/validateDrop'
import { dropPc } from './assets/helpers/dropPc';


const DOMbody = document.querySelector('body') as HTMLBodyElement;

// state
let STATEboard = INITboard;
let STATEpc = getRandomPc(Pieces);

// test one drop decision: 
// dropPcOnce( STATEboard, STATEpc );

let DOMboard = boardBuilder(STATEboard);
let DOMBoardSTATE = attacher(DOMboard, STATEpc);

DOMbody.appendChild(HeaderBuilder());
DOMbody.appendChild(DOMBoardSTATE);


// setInterval(() => {
//     // do one drop
//     const canDrop = validateDrop(STATEpc, STATEboard)

//     if (canDrop) {
//         STATEpc = dropPc(STATEpc);
//         console.log(STATEpc);
//         DOMbody.removeChild(DOMBoardSTATE);

//         DOMBoardSTATE = attacher(DOMboard, STATEpc);

//         DOMbody.appendChild(DOMBoardSTATE);
//     }
// }, 700)
