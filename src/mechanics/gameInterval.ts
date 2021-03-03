
import produce from 'immer';
import { Piece } from '../assets/pieces/index'
import { getRandomPc } from '../assets/helpers/getRandomPc'

// drop logic
import { validateDrop } from '../assets/helpers/validateDrop'
import { dropPc } from '../assets/helpers/dropPc';
import { attacher } from '../assets/pieces/attacher'
// transform logic
import { transformPc } from '../assets/helpers/transformPc'


export const startDropping = (initPc: Piece, initBoard: number[][], root: HTMLBodyElement) => {

    

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