
import { Piece } from '../pieces/index'

export const startGame = (Pieces: Piece[]) => {
    // init random piece
    let initPc = Pieces[Math.floor(Math.random() * Pieces.length)]


    const progInterval = setInterval(() => {

        // console.log('can scope increment within interval?', stateThing);
        // stateThing++;

    }, 500);

    return progInterval;
};

export const endGame = (gameInterval: NodeJS.Timeout) => {
    clearInterval(gameInterval);
}