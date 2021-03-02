
import produce from 'immer';
import { Piece } from '../assets/pieces/index'
import { getRandomPc } from '../assets/helpers/getRandomPc'
import { dropPc } from '../assets/helpers/dropPc'

// I want my dropInterval to incrementally track a position
// relate it to a board(so as to notice when it bumps into static pieces)

export const startGame = (Pieces: Piece[]) => {
    // init random piece
    let initPc = getRandomPc(Pieces)
    

    // const progInterval = setInterval(() => {

    //     // console.log('can scope increment within interval?', stateThing);
    //     // stateThing++;

    // }, 500);

    // return progInterval;
};

export const endGame = (gameInterval: NodeJS.Timeout) => {
    clearInterval(gameInterval);
}

