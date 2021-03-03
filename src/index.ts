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
const UpdatedDOMBoard = attacher(DOMboard, STATEpc);

// do one drop
if (validateDrop(STATEpc, STATEboard)) {
    STATEpc = dropPc(STATEpc)
    attacher(DOMboard, STATEpc);
}


DOMbody.appendChild(UpdatedDOMBoard);
DOMbody.appendChild(HeaderBuilder());

