
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

export const validateDrop = (
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

    })

    return canDrop;
}