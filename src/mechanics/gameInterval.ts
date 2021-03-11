
import produce from 'immer';

import { Piece } from '../assets/pieces/index';

// drop logic
import { validatePcMove } from '../assets/helpers/validatePcMove';
import { dropPc } from '../assets/helpers/dropPc';
import { attacher, Pieces } from '../assets/pieces/index';
// transform logic
import { transformSTATEBoard } from '../assets/helpers/transformSTATEBoard';
import { boardBuilder, INITboard } from '../assets/components/board';
// rehydrate piece
import { getRandomPc } from '../assets/helpers/getRandomPc';
import { checkSpawn } from '../assets/helpers/checkSpawn';
import { firstRowEmpty } from '../assets/helpers/firstRowEmpty';

import { KEYSTROKES } from '../constants/KEYSTROKES'

export const startDropping = (
    root: HTMLBodyElement,
    boardDOM: HTMLDivElement,
    ender: () => void) => {

    let STATEpc = getRandomPc(Pieces);
    let STATEboard = INITboard;
    let STATEboardDOM = boardDOM;
    
    console.log('board X length', STATEboard[0].length);
    // controls
    document.addEventListener('keydown', logKey);

    function logKey(kb: KeyboardEvent) {

        /*  w r - rotations
            s f - left / right
            d - plunge
        */

        switch(kb.key) {
            case KEYSTROKES.CCW:

                if (validatePcMove(STATEpc, STATEboard, KEYSTROKES.CCW)) {
                    // if form: 0, form should be length of forms - 1
                    if (STATEpc.form === 0) {

                        STATEpc = produce(STATEpc, draft => {
                            draft.form = draft.forms.length-1;
                            return draft;
                        });

                        updatePcPos();

                    } else {
                    // otherwise: form should decrement
                        STATEpc = produce(STATEpc, draft => {
                            draft.form -= 1;
                            return draft;
                        });

                        updatePcPos();

                    };
                    // replug into dom
                };

                break;
            
            case KEYSTROKES.CW:

                if (validatePcMove(STATEpc, STATEboard, KEYSTROKES.CW)) {
                    // if form: length of forms - 1, form should be 0
                    if (STATEpc.form === STATEpc.forms.length-1) {

                        STATEpc = produce(STATEpc, draft => {
                            draft.form = 0;
                            return draft;
                        });
                        updatePcPos();

                    } else {
                    // otherwise form should increment

                        STATEpc = produce(STATEpc, draft => {
                            draft.form += 1;
                            return draft;
                        });
                        updatePcPos();
                    };
                    // replug into dom
                } else {} // do nothing
                
                break;

            case KEYSTROKES.LEFT:

                if (validatePcMove(STATEpc, STATEboard, KEYSTROKES.LEFT)) {
                    // if pivot[1] is 0, do nothing
                    if (STATEpc.pivot[1] === 0) {}
                    else {
                    // else pivot[1] decrement
                        STATEpc = produce(STATEpc, draft => {
                            draft.pivot[1] -= 1;
                            return draft;
                        });
                    };
                    updatePcPos();
                }
                break;
            
            case KEYSTROKES.RIGHT:

                if (validatePcMove(STATEpc, STATEboard, KEYSTROKES.RIGHT)) {
                    // if pivot[1] is STATEboard[0].length - 1, do nothing
                    if (STATEpc.pivot[1] === STATEboard[0].length-1) {}
                    else {
                    // else pivot[1] increment
                        STATEpc = produce(STATEpc, draft => {
                            draft.pivot[1] += 1;
                            return draft;
                        });
                        updatePcPos();
                    };
                }
                break;

            case KEYSTROKES.PLUNGE:
                // modularize downward movement and reuse in interval as well as here
                if (validatePcMove(STATEpc, STATEboard, KEYSTROKES.PLUNGE)) {
                    STATEpc = dropPc(STATEpc);
                    updatePcPos();
                };
                
                break;

            default:
                // not the right keypress, therefore do nothing
                break;
        };
    };

    // drop interval
    const dropInt = setInterval(() => {
        // do one drop
        const canDrop = validatePcMove(STATEpc, STATEboard, KEYSTROKES.PLUNGE);
    
        if (canDrop) {
            STATEpc = dropPc(STATEpc);
            updatePcPos();
        } else {
            
            STATEboard = transformSTATEBoard(STATEpc, STATEboard);
            
            root.removeChild(STATEboardDOM);
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

    function updatePcPos() {
        root.removeChild(STATEboardDOM);
        // cleans prev active && attaches new active
        STATEboardDOM = attacher(STATEboardDOM, STATEpc);
        // v - update board
        root.appendChild(STATEboardDOM);
    }

    function transformDOMBoard() {

    }
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