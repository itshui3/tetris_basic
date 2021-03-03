

export const buildStart = (dashboard: HTMLDivElement) => {

    const startBtn = document.createElement('button');

    startBtn.textContent = 'Click to Start!';

    startBtn.addEventListener('click', () => {
        startGame(dashboard, startBtn);
    });

    return startBtn
};

const startGame = (dashboard: HTMLDivElement, startBtn: HTMLButtonElement) => {

    dashboard.removeChild(startBtn);

    dashboard.appendChild( buildEnd(dashboard) );

    return dashboard;
};

const buildEnd = (dashboard: HTMLDivElement) => {

    const endBtn = document.createElement('button');

    endBtn.textContent = 'Click to End!';

    endBtn.addEventListener('click', () => {
        endGame(dashboard, endBtn);
    });

    return endBtn
}

const endGame = (dashboard: HTMLDivElement, endBtn: HTMLButtonElement) => {
    dashboard.removeChild(endBtn);
    
    dashboard.appendChild( buildStart(dashboard) );

    return dashboard;
};