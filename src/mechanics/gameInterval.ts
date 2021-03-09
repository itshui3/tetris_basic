
import produce from 'immer';

import { Piece } from '../assets/pieces/index'

// drop logic
import { validateDrop } from '../assets/helpers/validateDrop';
import { dropPc } from '../assets/helpers/dropPc';
import { attacher, Pieces } from '../assets/pieces/index';
// transform logic
import { transformBoard } from '../assets/helpers/transformBoard';
import { boardBuilder, INITboard } from '../assets/components/board';
// rehydrate piece
import { getRandomPc } from '../assets/helpers/getRandomPc';
import { checkSpawn } from '../assets/helpers/checkSpawn';
import { firstRowEmpty } from '../assets/helpers/firstRowEmpty';


export const startDropping = (
    root: HTMLBodyElement,
    boardDOM: HTMLDivElement,
    ender: () => void) => {

    let STATEpc = getRandomPc(Pieces);
    let STATEboard = INITboard
    let STATEboardDOM = boardDOM;

    const dropInt = setInterval(() => {
        // do one drop
        const canDrop = validateDrop(STATEpc, STATEboard);
    
        if (canDrop) {
            STATEpc = dropPc(STATEpc);

            root.removeChild(STATEboardDOM);
            // cleans prev active && attaches new active
            STATEboardDOM = attacher(STATEboardDOM, STATEpc);
    
            root.appendChild(STATEboardDOM);
        } else {
            root.removeChild(STATEboardDOM);
            STATEboard = transformBoard(STATEpc, STATEboard);
            
            STATEboardDOM = boardBuilder(STATEboard);

            STATEpc = getRandomPc(Pieces);
            // but also if a piece transforms on first row

            if (!checkSpawn(STATEpc, STATEboard) || !firstRowEmpty(STATEboard[0])) { 
                // end the game
                ender()
            }

            STATEboardDOM = attacher(STATEboardDOM, STATEpc);
            root.appendChild(STATEboardDOM);
        }
    }, 100)
    
    return dropInt;
};

export const stopDropping = (gameInterval: NodeJS.Timeout) => {
    clearInterval(gameInterval);
}

/*

    if( determineIfDrop(Pc: Piece, boardState: number[][]) )
        const dropCoords = buildDropCoords(Pc);
        return validateDrop(dropCoords, boardState)

    {
        perform drop
    }

    else 

    {
        perform transform
    }

*/