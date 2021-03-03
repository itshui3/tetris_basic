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

import { startDropping, stopDropping } from './mechanics/gameInterval';

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

const dropInt = startDropping(DOMbody, DOMBoardSTATE);

setTimeout(() => {
    stopDropping(dropInt);
}, 50000)

