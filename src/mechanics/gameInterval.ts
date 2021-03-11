
import produce from 'immer';

import { Piece } from '../assets/pieces/index';

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

enum KEYSTROKES {
    CCW = 'w',
    CW = 'r',
    LEFT = 's',
    RIGHT = 'f',
    PLUNGE = 'd'
};

export const startDropping = (
    root: HTMLBodyElement,
    boardDOM: HTMLDivElement,
    ender: () => void) => {

    let STATEpc = getRandomPc(Pieces);
    let STATEboard = INITboard;
    let STATEboardDOM = boardDOM;
    
    console.log('pc shape: ', STATEpc);
    console.log('board shape', STATEboard);
    // controls
    document.addEventListener('keydown', logKey);

    function logKey(kb: KeyboardEvent) {
        /*  w r - rotations
            s f - left / right
            d - plunge
        */

        switch(kb.key) {
            case KEYSTROKES.CCW:

                // if form: 0, form should be length of forms - 1
                if (STATEpc.form === 0) {
                    STATEpc.form = STATEpc.forms.length-1;
                } else {
                // otherwise: form should decrement
                    STATEpc.form -= 1;
                };
                // replug into dom

                break;
            
            case KEYSTROKES.CW:

                // if form: length of forms - 1, form should be 0
                if (STATEpc.form === STATEpc.forms.length-1) {
                    STATEpc.form = 0;
                } else {
                // otherwise form should increment
                    STATEpc.form += 1;
                };
                // replug into dom
                
                break;

            case KEYSTROKES.LEFT:

                // if pivot[1] is 0, do nothing
                if (STATEpc.pivot[1] === 0) {}
                else {
                // else pivot[1] decrement
                    STATEpc.pivot[1] -= 1
                }
                // replug into dom

                break;
            
            case KEYSTROKES.RIGHT:
                // if pivot[1] is STATEboard[0].length - 1, do nothing
                // else pivot[1] increment
                break;

            case KEYSTROKES.PLUNGE:
                // modularize downward movement and reuse in interval as well as here
                break;

            default:
                // not the right keypress, therefore do nothing
                break;
        }
    };

    // drop interval
    const dropInt = setInterval(() => {
        // do one drop
        const canDrop = validateDrop(STATEpc, STATEboard);
    
        if (canDrop) {
            STATEpc = dropPc(STATEpc);

            root.removeChild(STATEboardDOM);
            // cleans prev active && attaches new active
            STATEboardDOM = attacher(STATEboardDOM, STATEpc);
            // v - update board
            root.appendChild(STATEboardDOM);
        } else {
            root.removeChild(STATEboardDOM);
            STATEboard = transformBoard(STATEpc, STATEboard);
            
            STATEboardDOM = boardBuilder(STATEboard);

            STATEpc = getRandomPc(Pieces);
            // but also if a piece transforms on first row

            if (!checkSpawn(STATEpc, STATEboard) || !firstRowEmpty(STATEboard[0])) { 
                // end the game
                ender();
            };

            STATEboardDOM = attacher(STATEboardDOM, STATEpc);
            // v - update board
            root.appendChild(STATEboardDOM);
        };
    }, 100);
    
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