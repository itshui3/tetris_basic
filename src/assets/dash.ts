
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

HeadCont.appendChild(Dashboard);

export { HeadCont }