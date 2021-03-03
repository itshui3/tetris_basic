import { startDropping } from '../../../mechanics/gameInterval'

export const buildStart = (dashboard: HTMLDivElement, dropCB: () => NodeJS.Timeout) => {

    const startBtn = document.createElement('button');

    startBtn.textContent = 'Click to Start!';

    startBtn.addEventListener('click', () => {
        startGame(dashboard, startBtn, dropCB(), dropCB);
    });

    return startBtn
};

const startGame = (
    dashboard: HTMLDivElement, 
    startBtn: HTMLButtonElement, 
    dropInt: NodeJS.Timeout,
    dropCB: () => NodeJS.Timeout) => {

    dashboard.removeChild(startBtn);

    dashboard.appendChild( buildEnd(dashboard, dropInt, dropCB) );

    return dashboard;
};

const buildEnd = (dashboard: HTMLDivElement, dropInt: NodeJS.Timeout, dropCB: () => NodeJS.Timeout) => {

    const endBtn = document.createElement('button');

    endBtn.textContent = 'Click to End!';

    endBtn.addEventListener('click', () => {
        clearInterval(dropInt);
        endGame(dashboard, endBtn, dropCB);
    });

    return endBtn
}

const endGame = (dashboard: HTMLDivElement, endBtn: HTMLButtonElement, dropCB: () => NodeJS.Timeout) => {
    dashboard.removeChild(endBtn);
    
    dashboard.appendChild( buildStart(dashboard, dropCB) );

    return dashboard;
};