
import { CELL } from '../../constants/CELL'
/*
CELL
    EMPTY   -0
    STATIC  -1
    ACTIVE  -2
*/

import produce from 'immer';
import { Piece } from '../pieces/index'

import { buildAttachables } from './buildAttachables'

import { KEYSTROKES } from '../../constants/KEYSTROKES'

export const validatePcMove = (
Pc: Piece,
boardState: number[][],
keystroke: string) => {

    switch(keystroke) {
        case KEYSTROKES.CCW:

            break;
        
        case KEYSTROKES.CW:
            
            break;

        case KEYSTROKES.LEFT:

            break;
        
        case KEYSTROKES.RIGHT:
            
            break;

        case KEYSTROKES.PLUNGE:
            return validateDrop(Pc, boardState);

        default:
            // not the right keypress, therefore do nothing
            break;
    }
}

const validateCCW = (
Pc: Piece,
boardState: number[][]) => {

    const ccwPc = produce(Pc, draft => {

        if (draft.form === 0) {
            draft.form = draft.forms.length-1;
        } else {
        // otherwise: form should decrement
            draft.form -= 1;
        };

        return draft;
    });

    const ccwCoords = buildAttachables( ccwPc );

    let canCCW: boolean = true;

    ccwCoords.forEach(([activeY, activeX]) => {
        // if activeY is 23, we cannot ccw
        if (activeY > 23) {
            canCCW = false
        } else
        // if boardState coord runs into static, we cannot ccw
        if (boardState[activeY][activeX] === CELL.STATIC) {
            canCCW = false
        } else
        // if a piece is hitting walls on X axis, we cannot ccw
        if (activeX === 0 || activeX === boardState[0].length) {
            canCCW = false;
        }
    });

    return canCCW;

}

const validateCW = (
Pc: Piece,
boardState: number[][]) => {

    const cwPc = produce(Pc, draft => {

        if (draft.form === draft.forms.length-1) {
            draft.form = 0;
        } else {
        // otherwise: form should decrement
            draft.form += 1;
        };

        return draft;
    });

    const cwCoords = buildAttachables( cwPc );

    let canCW: boolean = true;

    cwCoords.forEach(([activeY, activeX]) => {
        // if activeY is 23, we cannot ccw
        if (activeY > 23) {
            canCW = false
        } else
        // if boardState coord runs into static, we cannot ccw
        if (boardState[activeY][activeX] === CELL.STATIC) {
            canCW = false
        } else
        // if a piece is hitting walls on X axis, we cannot ccw
        if (activeX === 0 || activeX === boardState[0].length) {
            canCW = false;
        }
    });

    return canCW;

} 


const validateDrop = (
Pc: Piece, 
boardState: number[][]) => {

    const pcLoweredPivot = produce(Pc, draft => {
        draft.pivot[0] += 1
    }) as Piece;

    const dropCoords = buildAttachables( pcLoweredPivot );

    let canDrop: boolean = true;

    dropCoords.forEach(([activeY, activeX]) => {
        // if activeY is 23
        // we cannot perform drop
        if (activeY > 23) {
            canDrop = false
        } else
        // if boardState coord runs into static
        // we cannot perform drop
        if (boardState[activeY][activeX] === CELL.STATIC) {
            canDrop = false
        }

    });

    return canDrop;
}