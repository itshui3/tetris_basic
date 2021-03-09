
import produce from 'immer';

import { buildStart, buildEnd, buildReset } from './dashboardControls/startEnd';

import { 
    INITboard, 
    boardBuilder } from '../components/board';

import { Pieces, attacher } from '../pieces/index';

import { getRandomPc } from '../helpers/getRandomPc';

import { startDropping } from '../../mechanics/gameInterval';

const resetBoard = () => {
    const DOMbody = document.querySelector('body') as HTMLBodyElement;
    const currentBoard = document.querySelector('.board') as HTMLDivElement;
    DOMbody.removeChild(currentBoard);
}

const attachNewBoard = () => {
    // state
    let STATEboard = produce(INITboard, draft => draft);
    let STATEpc = produce(getRandomPc(Pieces), draft => draft);

    let DOMboard = boardBuilder(STATEboard);
    let DOMBoardSTATE = attacher(DOMboard, STATEpc);

    const DOMbody = document.querySelector('body') as HTMLBodyElement;

    DOMbody.appendChild(DOMBoardSTATE);
    return DOMBoardSTATE;
};

export const HeaderBuilder = () => {
    // startDropCB: () => NodeJS.Timeout

    const HeadCont = document.createElement('div');
    HeadCont.className = 'head';
    
    const heading = document.createElement('h1');
    heading.textContent = 'Tetris!';
    
    HeadCont.appendChild(heading);
    
    const Dashboard = document.createElement('div');
    Dashboard.className = 'dashboard';

    const startBtn = buildStart();
    const endBtn = buildEnd();
    const resetBtn = buildReset();

    Dashboard.appendChild(startBtn);

    let dropInterval: NodeJS.Timeout;

    function ender() {
        clearInterval(dropInterval);

        Dashboard.removeChild(endBtn);
        Dashboard.appendChild(resetBtn);
    }
    
    startBtn.addEventListener('click', () => {

        const DOMboard = document.querySelector('.board') as HTMLDivElement;
        const DOMbody = document.querySelector('body') as HTMLBodyElement;
        dropInterval = startDropping(DOMbody, DOMboard, ender);

        Dashboard.removeChild(startBtn);
        Dashboard.appendChild(endBtn);
    });

    endBtn.addEventListener('click', () => {

        ender()

    });

    resetBtn.addEventListener('click', () => {
        resetBoard();
        attachNewBoard();

        Dashboard.removeChild(resetBtn);
        Dashboard.appendChild(startBtn);
    });
    
    HeadCont.appendChild(Dashboard);

    return HeadCont;
};

/*
    enum GAMESTATE {
        INIT,       // startBtn exists, board in resetted state
        STARTED,    // endBtn exists
        ENDED       // resetBtn exists, board in static state(interval stopped)
    }

    const state = GAMESTATE.INIT;

    switch(state) {
        case GAMESTATE.INIT:
            const startBtn = buildStart();
            startBtn.addEventListener('click', () => {
                // startGame(dashboard, startBtn);
            });
            
            Dashboard.appendChild(startBtn);
    }
*/