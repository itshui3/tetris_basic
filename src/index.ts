
import produce from 'immer';
// styles
import './styles/reset.css';
import './styles/center.css';
import './styles/board.css';
import './styles/cellState.css';

import { 
    INITboard, 
    boardBuilder } from './assets/components/board';

import { HeaderBuilder } from './assets/components/dash';

const DOMbody = document.querySelector('body') as HTMLBodyElement;

// state
let STATEboard = produce(INITboard, draft => draft);

let DOMboard = boardBuilder(STATEboard);

DOMbody.appendChild(HeaderBuilder());
DOMbody.appendChild(DOMboard);