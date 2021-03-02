

const HeaderBuilder = (
startGame: () => NodeJS.Timeout,
endGame: () => void) => {
    
    const HeadCont = document.createElement('div');
    HeadCont.className = 'head';
    
    const heading = document.createElement('h1');
    heading.textContent = 'Tetris!';
    
    HeadCont.appendChild(heading);
    
    const Dashboard = document.createElement('div');
    Dashboard.className = 'dashboard';
    
    Dashboard.innerHTML = `
    <button class='start_btn'>Start Game</button>
    `;
    const StartGame = document.createElement('button');
    StartGame.addEventListener('click', () => {
    
    })
    
    HeadCont.appendChild(Dashboard);

    return HeadCont;
    
}

export { HeaderBuilder }