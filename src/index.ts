// styles
import './styles/reset.css';
import './styles/center.css';
import './styles/board.css';

import { INITboard, INITDOMboard, CELL } from './assets/board';

const DOMbody = document.querySelector('body') as HTMLBodyElement

DOMbody.appendChild(INITDOMboard);