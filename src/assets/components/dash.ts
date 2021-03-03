
import { buildStart } from './dashboardControls/startEnd'

export const HeaderBuilder = () => {
    
    const HeadCont = document.createElement('div');
    HeadCont.className = 'head';
    
    const heading = document.createElement('h1');
    heading.textContent = 'Tetris!';
    
    HeadCont.appendChild(heading);
    
    const Dashboard = document.createElement('div');
    Dashboard.className = 'dashboard';
    
    Dashboard.appendChild(buildStart(Dashboard));
    
    HeadCont.appendChild(Dashboard);

    return HeadCont;
    
};
